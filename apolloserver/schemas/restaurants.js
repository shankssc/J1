import { gql } from 'apollo-server-express'

const Restaurants = gql`

input RegisteringRestaurants {
    name: String!
    owner: String!
    
}

type Query {
    getRestaurant(id: ID!): Restaurant
    getRestaurants: [Restaurant]
}

`
export default Restaurant