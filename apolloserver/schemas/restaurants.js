import { gql } from 'apollo-server-express'

const Restaurant = gql`

    enum Item_type {
        VEGAN
        VEG
        NON_VEG
    }

    type Restaurant {
        uid: String!
        _id: ID!
        name: String!
        phone: String!
        owner: String!
        address: String!
    }

    input RegisteringRestaurants {
        name: String!
        phone: String!
        address: String!
    }

    input AddingItems {
        restaurant_name: String!
        name: String!
        calories: String!
        type: Item_type!
        price: String!
        category: String!
        subcategory: String!
    }

    type Query {
        getRestaurant(rest_id: ID!): Restaurant
        getRestaurants: [Restaurant]
    }
    
    type Mutation {
        createRestaurant(restaurantInput: RegisteringRestaurants): Restaurant

        addMenuItems(menuItemInput: AddingItems): Restaurant
    }
`
export default Restaurant