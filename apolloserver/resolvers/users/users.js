import User from '../../models/user.js'
import Auth from '../../services/authServices.js'
import { ApolloError } from 'apollo-server-express'

export default {

    Query: {
        getUsers: async () => await User.find(),

        getUser: async (_, {id}, context) => {
            if (!context.userId) throw new Error('You must be authenticated!')

            if (context.userId !== id) throw new Error('You can only view your own data')
        
            return User.findById(id)
        }
    },

    Mutation: {
        signup: async (_, {registerInput: { username, email, password, role } }) => {
            
            

                const oldUser = await User.findOne({ email })

                if (oldUser) {
                    throw new ApolloError("A user is already registered with the email " + email);
                }
                
            try {
                const hashedPassword = await Auth.passwordHasher(password)

                const user = new User({ username, email, password: hashedPassword, role})

                await user.save()

                console.log(user) 
                console.log('new user created')
                
                return user
            } catch (error) {
                throw new ApolloError("User creation failed")
            }     
        },

        login: async(_, {loggingInput: {email, username, password}}) => {

            if (!username && !email) {
                throw new ApolloError('email/username required')
            }

            const userPayload = email ? { email } : {username}

            const user = await User.findone(userPayload)

            if (!user) {
                throw new ApolloError('user not found')
            }

            const passcheck = await Auth.passwordMatcher(password, user.password)

            if (!passcheck) {
                throw new ApolloError('Invalid password please try again')
            }

            return {
                jwt: Auth.generateToken({
                    userId: user.id,
                    username: user.username,
                    email: user.email
                })
            }
        }
    }
}