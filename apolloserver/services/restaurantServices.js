import { AuthenticationError, ApolloError } from 'apollo-server-express'
import Restaurant from '../models/restaurant.js'
import dotenv from 'dotenv'

dotenv.config()

let categories = {
    "BREAKFAST": "Breakfast",
    "LUNCH": "Lunch",
    "DINNER": "Dinner",
    "SPECIALS": "Specials"
}

export default class Rest {
    constructor () {

    }

    static owner_checker = async (active_user,User) => {
        const lookup = await User.findOne({owner:active_user})

        return lookup
    }

    static categorizer = async (specified_category) => {
        return categories[specified_category]
    }

    static duplicate_checker = async (user_input_item) => {
        //const duplicate_item = Restaurant.findOne({})
        for (var type in categories) {
            duplicate_item = Restaurant.findOne({name: Restaurant.category.categories[type].name})

            return duplicate_item
        }
    }

    static Item_adder = async (Restaurant_instance, Payload) => {
        const [name, calories, type, price, category] = Payload

        Restaurant.instance.category.categories[category].updateOne({name:name},
                                      {calories:calories},
                                      {type:type},
                                       {price:price})

        return Restaurant_instance
    }
}