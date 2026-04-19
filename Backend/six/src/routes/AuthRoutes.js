import express from "express";
import { addUser, allUsers, getUser } from "../controllers/AuthControllers.js";



const authroute = express.Router()



authroute.post('/user',addUser)
authroute.get('/getuser',allUsers)
authroute.get('/user/:id',getUser)
// authroute.delete('/user',addUser)
// authroute.put('/user',addUser)
// authroute.getuSER('/user',addUser)


export default authroute