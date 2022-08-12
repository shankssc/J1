
const User = `
    type User {
        _id: ID!
        uid: ID!
        username: String!
        email: String!
        password: String!
        role: enum {
            customer
            business_owner
            deliverer
            administrator
        }!
    }

    type Token {
        jwt: ID!
    }

    type AuthQuery {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type AuthMutation {
        signup(username: String!, email: String!, password: String!): String!,

        login(email: String, username: String, password: String!): Token!
    }

    schema {
        query: AuthQuery
        mutation: AuthMutation
    }
`;

export default User