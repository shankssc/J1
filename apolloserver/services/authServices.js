import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { AuthenticationError, ApolloError } from 'apollo-server-express'

dotenv.config()

const { SECRET_KEY } = process.env.TOKEN_SECRET

export default class Auth {
    constructor() {
    }

    static passwordHasher = async (password) => {
        return bcrypt.hash(password, 12)
    }

    static passwordMatcher = async (password, storedPassword) => {

        const isPasswordCorrect = bcrypt.compare(password, storedPassword)

        return isPasswordCorrect
    }

    static generateToken = async ({ username, email, userId}) => {

        return jwt.sign({username:username, email: email, id: userId}, 
                        process.env.TOKEN_SECRET, 
                        { expiresIn: "1h" })
    }

    static getUserId({ req = {}, authToken = '' }) {
        if (req.request?.headers) {
            const authHeader = req.request.headers.authorization

            if (authHeader) {
                const token = authHeader.replace('Bearer', '')

                if (!token) {
                    return null
                }

                const {userId} = jwt.verify(token, process.env.TOKEN_SECRET)

                return userId
            }
        }

        else if (authToken) {
            const {userId} = jwt.verify(authToken, process.env.TOKEN_SECRET)

            return userId
        }

        return null;
    }

    static verifyToken = async(context, SECRET_KEY) => {
        const authHeader = context.req.headers.authorization;

        if (AuthHeader) {
            const token = authHeader.split('Bearer ')[1]
            if (token) {
                try {
                    const user = jwt.verify(token, SECRET_KEY);
                    return user
                }
                catch (err) {
                    throw new AuthenticationError('Invalid/Expired token')
                }
            }
            throw new ApolloError('Authentication token must be of Bearer [token] format')
        }
        throw new ApolloError('Authentication header must be provided')
    }
}
