import { gql } from 'apollo-server-express'

/*
const Restaurant = gql`

type Breakfast {
    uid: String!
    name: String!
    calories: String!
    price: String!
}

type Lunch {
    uid: String!
    name: String!
    calories: String!
    price: String!
}

type Dinner {
    uid: String!
    name: String!
    calories: String!
    price: String!
}

type Specials {
    uid: String!
    name: String!
    calories: String!
    price: String!
}

type categories {
    Breakfast: [Breakfast]
    Lunch: [Lunch]
    Dinner: [Dinner]
    Specials: [Specials]
}

input breakfastInput {
    name: String!
    calories: String!
    price: String!
}

input lunchInput {
    name: String!
    calories: String!
    price: String!
}

input dinnerInput {
    name: String!
    calories: String!
    price: String!
}

input specialsInput {
    name: String!
    calories: String!
    price: String!
}

input categoriesInput {
    Breakfast: [breakfastInput]
    Lunch: [lunchInput]
    Dinner: [dinnerInput]
    Specials: [specialsInput]
}

type Restaurant {
    uid: String!
    _id: ID!
    name: String!
    phone: String!
    owner: String!
    address: String!
    categories: [categories]
}

input RegisteringRestaurants {
    name: String!
    phone: String!
    address: String!
}

input AddingMenuItems {
    name: String!
    categories: [categoriesInput]!
}

type Query {
    getRestaurant(rest_id: ID!): Restaurant
    getRestaurants: [Restaurant]
}

type Mutation {
    createRestaurant(restaurantInput: RegisteringRestaurants): Restaurant

    updatingMenu(menuInput: AddingMenuItems, data: categoriesInput ): Restaurant!
}
`
*/

const Restaurant = gql`
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

    type Query {
        getRestaurant(rest_id: ID!): Restaurant
        getRestaurants: [Restaurant]
    }
    
    type Mutation {
        createRestaurant(restaurantInput: RegisteringRestaurants): Restaurant
    }
`
export default Restaurant