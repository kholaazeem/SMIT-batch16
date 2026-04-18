import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:String,
    email:String
})

 const Users = mongoose.model('user',UserSchema)
 export default Users