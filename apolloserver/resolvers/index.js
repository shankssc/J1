import User from './users/users.js'
import Restaurant from './restaurants/restaurants.js'

export default {
  Query: {
    ...User.Query,
    ...Restaurant.Query
  },
  Mutation: {
    ...User.Mutation,
    ...Restaurant.Mutation
  }
  
}