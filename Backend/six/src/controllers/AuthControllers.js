import Users from "../models/UsersSchema.js";



const addUser = async (req,res)=>{
console.log("req.body -->", req.body);
  try {
    const user = new Users(req.body);
    await user.save();

    res.json({
      status: true,
      message: "user created successfully",
    });
  } catch (error) {
    console.log("error in creating user-->", error);

    res.json({
      status: false,
      message: error.message,
    });
  }
}



const allUsers= async (req,res)=>{

  try {
    // all data
    const user = await Users.find()
    // const user = await Users.find({name:"sana"}) // specific data 
    res.json({
      status: true,
      message: "user fetched successfully",
      data:user
    });
    console.log(user);
    
  } catch (error) {
    console.log("error in creating user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
}


const getUser = async (req,res)=>{

  try {
    // all data
    const {id} = req.params
    const user = await Users.findById(id)
    
    res.json({
      status: true,
      message: "user fetched successfully",
      data:user
    });
    console.log(user);
    
  } catch (error) {
    console.log("error in creating user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
}





export {addUser,allUsers,getUser}