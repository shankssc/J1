import mongoose from "mongoose";
import uuid from "node-uuid";

const foodUserSchema = mongoose.schema({
    uid: {type: String, default:uuid.v4,required: true},
    id: {type: String},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true}
})

export default mongoose.model("User",foodUserSchema)