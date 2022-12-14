import { AuthenticationError, ApolloError, UserInputError } from 'apollo-server-express'
import Restaurant from '../models/restaurant.js'
import dotenv from 'dotenv'

dotenv.config()

export default class Rest {
    constructor () {

    }

    static owner_checker = async (active_user,User) => {
        const lookup = await User.findOne({owner:active_user})

        return lookup
    }

    static Category_adder = async (Restaurant, restaurant_name, category_name) => {

        const Restaurant_category = await Restaurant.findOne({name: restaurant_name,
            "menu": {
                "$elemMatch": {"category_name": {"$in": category_name}}}}
                
        )

        if (Restaurant_category !== null) {
            throw new UserInputError('Category already exists!')
        }

        else {
            await Restaurant.updateOne(
                {name: restaurant_name},
                {"$push": {"menu": {category_name: category_name}}},
                
            function (error, res) {
                if (error) {
                    console.log(error)
                    }

                else {
                    //console.log(res)
                }
                }
                
            )
        }
    }

    static Subcategory_adder = async (Restaurant, restaurant_name, category_name, subcategory_name) => {
        const Restaurant_subcategory = await Restaurant.findOne({name: restaurant_name,
            "menu.subcategory": {
                "$elemMatch": {"subcategory_name": {"$in": subcategory_name}}}}
                
        )
        
        
        if (Restaurant_subcategory !== null) {
            throw new UserInputError("This subcategory already exists!")

            return 'FAILURE'
        }

        else {
            /*
            await Restaurant.updateOne(
                {name: restaurant_name},
                 {"menu": {"category_name": category_name,
                           "$push": {"subcategory": {subcategory_name: subcategory_name}}}
                },
    
            function (error, res) {
                if (error) {
                    console.log(error)
                }
                else {
                    //console.log(res)
                }

            })*/

            await Restaurant.updateOne(
                {name: restaurant_name,
                 "menu.category_name": category_name
                },
                {
                    "$push": {
                        "menu.$.subcategory": {subcategory_name: subcategory_name}
                    }
                }
            )
        }
    }

    static Item_adder = async (Restaurant, Payload) => {
        const [name, restaurant_name,calories, type, price, category_name, subcategory_name] = Payload
        
        const duplicate_checker = await Restaurant.findOne(
            {name: restaurant_name,
            "menu.category_name": category_name,
            "menu.subcategory.subcategory_name": subcategory_name,
            "menu.subcategory.item": {
                "$elemMatch": {"item_name": {"$in": name}}}}      
        )
        
        if (duplicate_checker !== null) {
            throw new UserInputError("This item was already added for this subcategory!")
        }

        else {
            /*
            await Restaurant.updateOne(
                {name: restaurant_name,
                 //"menu.category_name": category_name,
                 //"subcategory_name": subcategory_name
                },
                {
                    "$push": {
                        "menu.$[outer].subcategory.$[inner].item": {"item_name":name,
                                                     "calories":calories,
                                                     "type":type,
                                                     "price":price}
                    },
                    "arrayFilters": [{"outer.category_name":category_name}, 
                                      {"inner.subcategory_name":subcategory_name}]
                }
            
            )
            */
            await Restaurant.updateOne({
                name: restaurant_name
              },
              {
                "$push": {
                  "menu.$[outer].subcategory.$[inner].item": {
                    "item_name": name,
                    "calories": calories,
                    "type": type,
                    "price": price
                  },
                  
                }
              },
              {
                "arrayFilters": [
                  {
                    "outer.category_name": category_name
                  },
                  {
                    "inner.subcategory_name": subcategory_name
                  }
                ]
              })
        }        
    }

    static Item_remover = async (Restaurant, Payload) => {
        const [name, restaurant_name, category_name, subcategory_name] = Payload

        const item_checker = await Restaurant.findOne(
            {name: restaurant_name,
            "menu.subcategory.subcategory_name": subcategory_name,
            "menu.subcategory.item": {
                "$elemMatch": {"item_name": name}}}      
        )
        
        if (item_checker == null) {
            throw new UserInputError("This item doesn't exist!")
        }

        else {
            await Restaurant.findOneAndUpdate({
                name: restaurant_name
              },
              {
                "$pull": {
                  "menu.$[outer].subcategory.$[inner].item": {
                    "item_name": name
                  },
                  
                }
              },
              {
                "arrayFilters": [
                  {
                    "outer.category_name": category_name
                  },
                  {
                    "inner.subcategory_name": subcategory_name
                  }
                ]
              })
        }
    }
}