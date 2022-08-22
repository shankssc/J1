
const User = `

    enum Role {
        CUSTOMER
        BUSINESS_OWNER
        CARRIER
        ADMINISTRATOR
    }

    type User {
        _id: ID!
        uid: ID!
        username: String!
        email: String!
        password: String!
        role: Role!
    }

    type Token {
        jwt: ID!
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): String!,

        login(email: String, username: String, password: String!): Token!
    }

`;

export default User