import mongoose from "mongoose";
import uuid from "node-uuid";

const restaurantSchema = mongoose.Schema({
    uid: {type: String, default:uuid.v4,required: true},
    id: {type: String},
    name: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    address: {type: String, required: true, unique: true},
    category: {
        Breakfast : {
            uid: {type: String, default:uuid.v4},
            name: {type: String, unique: true},
            calories: {type: String, unique: true},
            price: {type: String, unique: true},
        },

        Lunch : {
            uid: {type: String, default:uuid.v4},
            name: {type: String, unique: true},
            calories: {type: String, unique: true},
            price: {type: String, unique: true},
        },

        Dinner : {
            uid: {type: String, default:uuid.v4},
            name: {type: String, unique: true},
            calories: {type: String, unique: true},
            price: {type: String, unique: true},
        },

        Specials: {
            uid: {type: String, default:uuid.v4},
            name: {type: String, unique: true},
            calories: {type: String, unique: true},
            price: {type: String, unique: true},
        }
    }
},
{timestamps: true}
)

/*
const restaurantSchema = mongoose.Schema({
    uid: {type: String, default:uuid.v4,required: true},
    id: {type: String},
    name: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    address: {type: String, required: true, unique: true},
},
    {timestamps: true}
)
*/
export default mongoose.model("Restaurant",restaurantSchema)