import { AuthenticationError, ApolloError } from 'apollo-server-express'
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

    static duplicate_checker = async (user_input_item, restaurant_name, category, subcategory, Restaurant) => {
        //const duplicate_item = Restaurant.findOne({})
        /*
        complex_query = [{
            '$match': {
                $or: [
                    
                ]
            }
        }]
        */

        const duplicate_item = await Restaurant.find({name: restaurant_name,
                                                        "menu": {
                                                            "$elemMatch": {"category_name": {"$exists": category},
                                                                            "subcategory": {
                                                                                "$elemMatch": {"subcategory_name": {"$exists": subcategory},
                                                                                                "item": {
                                                                                                    "$elemMatch": {"name": {"$exists": user_input_item}}
                                                                                                }  
                                                                                            }
                                                                                        }
                                                                            }
                                                                }
                                                    })

        return duplicate_item
    }

    static Item_adder = async (Restaurant, Payload) => {
        const [name, restaurant_name,calories, type, price, category, subcategory] = Payload

        const Restaurant_category = await Restaurant.findOne({name: restaurant_name,
            "menu": {
                "$elemMatch": {"category_name": {"$in": category}}}}
                
        )

        
        /*
        if (Restaurant_category == null) {
            const category_addition = await Restaurant.updateOne(
                {name: restaurant_name},
                {"$push": {"menu": {category_name: category}}},
                
            function (error, res) {
                if (error) {
                    console.log(error)
                }
                else {
                
                }

            }
            )
        }

        
        const Restaurant_subcategory =  Restaurant.findOne({name: restaurant_name},
                                                                {"menu.category.subcategory": 
                                                                {"$elemMatch": 
                                                         
                                                                    {"subcategory_name":{"$in":subcategory}}
                                                                
                                                            }})
        */
        /*
        const Restaurant_subcategory = await Restaurant.findOne({name: restaurant_name},
                                                                {"menu": 
                                                                {category_name: category,
                                                                 "subcategory": 
                                                                 {subcategory_name: subcategory}
                                                                 
                                                                },
                                                            })
        */
        
        
        /*
        if (Restaurant_subcategory == null) {
            const subcategory_addition = await Restaurant.updateOne(
                {name: restaurant_name,
                 "menu": {category_name: category,
                           "$push": {"subcategory": {subcategory_name: subcategory}}}
                },
    
            function (error, res) {
                if (error) {
                    console.log(error)
                }
                else {
                    console.log(res)
                }

            }
            
            )
        }

        
        await Restaurant.updateOne({name: restaurant_name,
            "menu": 
            {category_name: category,
            "subcategory": 
            {subcategory_name: subcategory,
             "$push": {"item": {item_name:name,
                                calories:calories,
                                type:type,
                                price:price}}}
        
            },
            function (error, res) {
                if (error) {
                    console.log(error)
                }
                else {
                    console.log(res)
                }

            }
        })

        
        const restaurant_instance = await Restaurant.findOne({name: restaurant_name},
                                                            {"menu": 
                                                            {category_name: category,
                                                            "subcategory": 
                                                            {"item": {
                                                                "$elemMatch": {"item_name": {"$in": name}}
                                                            }}
                                                            
                                                            },
                                                        })
        
                                                        

        const restaurant_instance = await Restaurant.findOne({name: restaurant_name,
                                                            "menu": {
                                                                category_name: category,
                                                                "subcategory":
                                                                {"item":{item_name:name}}
                                                            }    
                                                            })

        return restaurant_instance
        */
    }
}