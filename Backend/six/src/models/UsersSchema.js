import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true,
    minLength:[4,"minimum 4 required"]
    },
    email:String
},
{
    timestamps:true
}


)

 const Users = mongoose.model('user',UserSchema)
 export default Users