import User from '../../models/user.js'
import Auth from '../../services/authServices.js'
import { ApolloError } from 'apollo-server-express'

export default {

    Query: {
        getUsers: async () => await User.find(),

        getUser: async (_, {id}, context) => {
            if (!context.userId) throw new ApolloError('You must be authenticated!')

            if (context.userId !== id) throw new ApolloError('You can only view your own data')
        
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
                
                return {
                    id: user.id,
                    ...user._doc
                }
            } catch (error) {
                throw new ApolloError("User creation failed")
            }     
        },

        login: async(_, {loggingInput: { email, username, password }}) => {

            if (!username && !email) {
                throw new ApolloError('email/username required')
            }
            
            const userPayload = email ? { email } : {username}

            //const user = await User.findOne(userPayload)
            const user = await User.findOne({username})

            if (!user) {
                throw new ApolloError('user not found please try again')
            }

            const passcheck = await Auth.passwordMatcher(password, user.password)

            if (!passcheck) {
                throw new ApolloError('Invalid password please try again')
            }

            else {
                const jwt = Auth.generateToken({
                    userId: user.id,
                    username: user.username,
                    email: user.email
                })
    
                user.token = jwt
    
                return {
                    id: user.id,
                    ...user._doc,
                    jwt
                }
            }
            
        }
    }
}