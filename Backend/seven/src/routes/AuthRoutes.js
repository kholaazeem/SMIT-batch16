import express from "express";
import { addUser, allUsers, deleteUser, getUser, loginUser, updateUser } from "../controllers/AuthControllers.js";



const authroute = express.Router()



authroute.post('/user',addUser)
authroute.post('/login',loginUser)
authroute.get('/getuser',allUsers)
authroute.get('/user/:id',getUser)
authroute.put('/user/:id',updateUser)
authroute.delete('/user/:id',deleteUser)    

// authroute.getuSER('/user',addUser)


export default authroute