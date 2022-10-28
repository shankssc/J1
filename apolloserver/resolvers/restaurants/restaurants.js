import User from '../../models/user.js'
import Restaurant from '../../models/restaurant.js'
import Auth from '../../services/authServices.js'
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
            
            
        }
    }
}