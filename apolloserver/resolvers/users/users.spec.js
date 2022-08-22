const User = require('../../models/user')
const resolvers = require('./users')
const { setupDb } = require('../test-setup')

setupDb('users')

describe('getUser', () => {
    it('For saving the user to database', async done => {
        const newUser = new User({email: 'suyash15122@gmail.com', username: 'shankssc', password: '12345', role: 'Customer'})
        await newUser.save()

        const fetchedUser = await resolvers.Query.getUser({}, {id: newUser.id}, {userId: newUser.id })

        expect(fetchedUser.id).toBe(newUser.id)

        done()
    })

    
})
