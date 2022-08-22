import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export default class Auth {
    constructor() {}

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
}
