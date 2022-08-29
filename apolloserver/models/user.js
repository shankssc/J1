import mongoose from "mongoose";
import uuid from "node-uuid";


const foodUserSchema = mongoose.Schema({
    uid: {type: String, default:uuid.v4,required: true},
    id: {type: String},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['CUSTOMER', 'BUSINESS_OWNER', 'CARRIER', 'ADMINISTRATOR'], required: true},
    

},
{timestamps: true}
)

export default mongoose.model("User",foodUserSchema)