import mongoose from "mongoose";
import uuid from "node-uuid";

/*
const restaurantSchema = mongoose.Schema({
    uid: {type: String, default:uuid.v4,required: true, unique: true},
    id: {type: String, unique: true},
    name: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    address: {type: String, required: true, unique: true},
    category: {
        Breakfast : [{
            uid: {type: String, default:uuid.v4, unique: true},
            name: {type: String, unique: true},
            calories: {type: String},
            type: {type: String, enum: ['VEGAN', 'VEG', 'NON_VEG']},
            price: {type: String},
        }],

        Lunch : [{
            uid: {type: String, default:uuid.v4, unique: true},
            name: {type: String, unique: true},
            calories: {type: String},
            type: {type: String, enum: ['VEGAN', 'VEG', 'NON_VEG']},
            price: {type: String},
        }],

        Dinner : [{
            uid: {type: String, default:uuid.v4, unique: true},
            name: {type: String, unique: true},
            calories: {type: String},
            type: {type: String, enum: ['VEGAN', 'VEG', 'NON_VEG']},
            price: {type: String},
        }],

        Specials: [{
            uid: {type: String, default:uuid.v4, unique:true},
            name: {type: String, unique: true},
            calories: {type: String},
            type: {type: String, enum: ['VEGAN', 'VEG', 'NON_VEG']},
            price: {type: String},
        }],
    }
},
{timestamps: true}
)
*/

/*

*/

const restaurantSchema = mongoose.Schema({
    uid: {type: String, default:uuid.v4,required: true, unique: true},
    id: {type: String, unique: true},
    name: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    owner: {type: String, required: true},
    address: {type: String, required: true, unique: true},
    menu: [{
        uid: {type: String, default:uuid.v4, unique: true},
        id: {type: String, unique: true},
        category_name: {type: String, unique: true},
        subcategory: [{
            uid: {type: String, default:uuid.v4, unique: true},
            id: {type: String, unique: true},
            subcategory_name: {type: String, unique: true},
            item: [{
                uid: {type: String, default:uuid.v4, unique:true},
                item_name: {type: String, unique: true},
                calories: {type: String},
                type: {type: String, enum: ['VEGAN', 'VEG', 'NON_VEG']},
                price: {type: String},
            }]
        }]
    }]
},
    {timestamps: true}
)


export default mongoose.model("Restaurant",restaurantSchema)