import request from 'request-promise';
import User from '../models/user.js'

const userSeed = () => {
    request('https://mysafeinfo.com/api/data?list=users&format=json')
    .then(res => JSON.parse(res))
    .then((res) => {
        const data = res.map((r) => {
            const obj = {};
            obj.username = r.usm;
            obj.email = r.em;
            obj.password = r.pwd;
            obj.role = r.rl;

            return obj;
        });

        data.forEach((d) => {
            const user = new User(d);
            user.save((err, item) => {
                console.log('saved:', item);
            })  
        })
    })

    .catch((err) => {
        console.log('err:',err);
    })
}

export default userSeed;