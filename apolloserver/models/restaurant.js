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
            uid: {type: String, default:uuid.v4,required: true},
            name: {type: String, required: true, unique: true},
            calories: {type: String, required: true, unique: true},
            price: {type: String, required: true, unique: true},
        },

        Lunch : {
            uid: {type: String, default:uuid.v4,required: true},
            name: {type: String, required: true, unique: true},
            calories: {type: String, required: true, unique: true},
            price: {type: String, required: true, unique: true},
        },

        Dinner : {
            uid: {type: String, default:uuid.v4,required: true},
            name: {type: String, required: true, unique: true},
            calories: {type: String, required: true, unique: true},
            price: {type: String, required: true, unique: true},
        },

        Specials: {
            uid: {type: String, default:uuid.v4,required: true},
            name: {type: String, required: true, unique: true},
            calories: {type: String, required: true, unique: true},
            price: {type: String, required: true, unique: true},
        }
    }
},
{timestamps: true}
)

export default mongoose.model("Restaurant",restaurantSchema)