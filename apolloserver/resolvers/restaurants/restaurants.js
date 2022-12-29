import User from '../../models/user.js'
import Restaurant from '../../models/restaurant.js'
import Auth from '../../services/authServices.js'
import Rest from '../../services/restaurantServices.js'

import { ApolloError, UserInputError } from 'apollo-server-express'


export default {

    Query: {
        getRestaurants: async () => await Restaurant.find(),

        getRestaurant: async (_,{rest_id},context) => {
            
            try {
                Restaurant = Restaurant.findById(rest_id)
                return Restaurant
            } catch (error) {
                throw new ApolloError('Please enter a valid restaurant name')
            }
        },

        getItems : async (_, {inp: {restaurant_name,category_name,subcategory_name}}) => {
            try {
                const MenuItems = await Restaurant.aggregate([
                    {$unwind: "$menu"},
                    {$unwind: "$menu.subcategory"},
                    {$unwind: "$menu.subcategory.item"},
                  
                    {
                    $match: {
                        $and: [
                          {"menu.category_name": category_name},
                          {"menu.subcategory.subcategory_name": subcategory_name},
                          {name: restaurant_name}
                        ]
                      }
                  },
                  {
                    $replaceRoot: {
                      newRoot: "$menu.subcategory.item"
                    }
                  }
                ])
                console.log(MenuItems)
                return {...MenuItems._doc}
            }catch (error) {
                console.log(error)
                
            }
        } 
    },

    Mutation: {
        createRestaurant: async(_, {restaurantInput:{name, phone, address}},context) => {
            //console.log(context.req.headers.authorization)
            const user = await Auth.verifyToken(context,process.env.TOKEN_SECRET)
            //console.log(String(user.id))
            
            if (!user) {
                throw new ApolloError('Session expired')
            }

            const present_user = await User.findOne({uid:user.id})
            
            if (present_user.role !== 'BUSINESS_OWNER') {
                throw new ApolloError('Only Business owners can create a restaurant page!')
            }
            
            try {
                const restaurant = new Restaurant({
                    name: name,
                    phone: phone,
                    owner: present_user.username,
                    address: address
                })
                //console.log(restaurant)
                await restaurant.save()
    
                
                console.log('New restaurant created successfully')

                return {
                    id: restaurant.id,
                    ...restaurant._doc
                }
            }
            
            catch (error) {
                throw new UserInputError('Restaurant creation failed')
            }
            
            
        },

        addMenuCategory: async(_,{categoryInput:{restaurant_name,category_name}},context ) => {
            const user = await Auth.verifyToken(context,process.env.TOKEN_SECRET)

            if (!user) {
                throw new ApolloError('Session expired')
            }
            const present_user = await User.findOne({uid:user.id})
            
            const valid_user = Rest.owner_checker(present_user.username,User)
            
            if (!valid_user) {
                throw new ApolloError('Only the owner is permitted to modify menu items!')
            }

            const vali = await Restaurant.findOne({name: restaurant_name})

            if (!vali) {
                throw new ApolloError('Please specify a valid restaurant name') 
            }
            
            await Rest.Category_adder(Restaurant, restaurant_name,category_name)

            return 'success'
            /*
            const category_op = await Rest.Category_adder(Restaurant, restaurant_name,category_name)
            console.log('Category is ',category_op)

            if (category_op == 'SUCCESSFULL') {
                console.log(category_op)
                console.log('Category addition was successfull')
                
                const Restaurant_category = await Restaurant.findOne({name: restaurant_name,
                    "menu": {
                        "$elemMatch": {"category_name": {"$in": category}}}}
                        
                )
                
                console.log(Restaurant_category)
                return {
                    id: Restaurant_category.id,
                    ...Restaurant_category._doc
                }
                
            }
            */

        },

        addMenuSubCategory: async(_, {subcategoryInput:{restaurant_name, category_name, subcategory_name}}, context) => {
            const user = await Auth.verifyToken(context,process.env.TOKEN_SECRET)

            if (!user) {
                throw new ApolloError('Session expired')
            }
            const present_user = await User.findOne({uid:user.id})
            
            const valid_user = Rest.owner_checker(present_user.username,User)
            
            if (!valid_user) {
                throw new ApolloError('Only the owner is permitted to modify menu items!')
            }

            const vali = await Restaurant.findOne({name: restaurant_name})

            if (!vali) {
                throw new ApolloError('Please specify a valid restaurant name') 
            }

            await Rest.Subcategory_adder(Restaurant, restaurant_name,category_name, subcategory_name)
            
        },

        addMenuItems: async(_, {menuItemInput:{restaurant_name,name,calories,type,price,category,subcategory}},context) => {
            const user = await Auth.verifyToken(context,process.env.TOKEN_SECRET)
            //console.log(String(user.id))
            
            if (!user) {
                throw new ApolloError('Session expired')
            }
            const present_user = await User.findOne({uid:user.id})
            
            const valid_user = Rest.owner_checker(present_user.username,User)
            
            if (!valid_user) {
                throw new ApolloError('Only the owner is permitted to modify menu items!')
            }
            
            const vali = await Restaurant.findOne({name: restaurant_name})

            if (!vali) {
                throw new ApolloError('Please specify a valid restaurant name') 
            }

            await Rest.Item_adder(Restaurant, [name,restaurant_name,calories,type,price,category,subcategory])

        },

        deleteMenuItems: async(_,{dmenuItemInput:{restaurant_name,name,category,subcategory}},context) => {
            const user = await Auth.verifyToken(context,process.env.TOKEN_SECRET)
            

            if (!user) {
                throw new ApolloError('Session expired')
            }
            const present_user = await User.findOne({uid:user.id})
            
            const valid_user = Rest.owner_checker(present_user.username,User)
            
            if (!valid_user) {
                throw new ApolloError('Only the owner is permitted to modify menu items!')
            }

            const vali = await Restaurant.findOne({name: restaurant_name})

            if (!vali) {
                throw new ApolloError('Please specify a valid restaurant name') 
            }

            await Rest.Item_remover(Restaurant,[name,restaurant_name,category,subcategory])
        }
    }
}