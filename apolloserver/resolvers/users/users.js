import User from '../../models/user.js'
import Auth from '../../services/authServices.js'

export default {

    Query: {
        getUsers: () => User.find(),

        getUser: async (_, {id}, context) => {
            if (!context.userId) throw new Error('You must be authenticated!')

            if (context.userId !== id) throw new Error('You can only view your own data')
        
            return User.findById(id)
        }
    },

    Mutation: {
        signup: async (_, { email, username, password }) => {
            
            const hashedPassword = await Auth.passwordHasher(password)


            const user = new User({ email, username, password: hashedPassword})

            await user.save()

            console.log('new user created')
        },

        login: async(_, {email, username, password}) => {

            if (!username && !email) {
                throw new Error('email/username required')
            }

            const userPayload = email ? { email } : {username}

            const user = await User.findone(userPayload)

            if (!user) {
                throw new Error('user not found')
            }

            const passcheck = await Auth.passwordMatcher(password, user.password)

            if (!passcheck) {
                throw new Error('Invalid password please try again')
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