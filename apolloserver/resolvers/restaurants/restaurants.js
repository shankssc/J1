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
            
            duplicate_item = Rest.duplicate_checker(name,restaurant_name,category,subcategory,Restaurant)

            if (duplicate_item !== null) {
                throw new UserInputError("This item already exists")
            }
            
            try {
                 

                const newMenuItemStatus = await Rest.Item_adder(Restaurant, [name,restaurant_name,calories,type,price,category,subcategory])
                
                
                if (newMenuItemStatus === 'SUCCESS') {
                    console.log('New Item was added successfully')

                    const newMenuItem = await Restaurant.findOne(({name: restaurant_name},
                        {"menu": 
                        {category_name: category,
                        "subcategory": 
                        {"item": {
                            "$elemMatch": {"item_name": {"$in": name}}
                        }}
                        
                        },
                    }))

                    return {
                        id: newMenuItem.id,
                        ...newMenuItem._doc
                    }
                }
                
            } catch (error) {
                
                throw new UserInputError('Item addition failed')
            }

        }
    }
}