import Users from "../models/UsersSchema.js";
import jwt from 'jsonwebtoken'

const addUser = async (req, res) => {
  console.log("req.body -->", req.body);
  try {
    const user = new Users(req.body);
    const data = await user.save();
    console.log(data);

    res.json({
      status: true,
      message: "user created successfully",
      user: data,
    });
  } catch (error) {
    console.log("error in creating user-->", error);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

const allUsers = async (req, res) => {
  try {
    // all data
    const user = await Users.find();
    // const user = await Users.find({name:"sana"}) // specific data
    res.json({
      status: true,
      message: "user fetched successfully",
      data: user,
    });
    console.log(user);
  } catch (error) {
    console.log("error in fetching user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    // all data
    const { id } = req.params;
    const user = await Users.findById(id);
    if (user == null) {
      console.log("chk raha");

      return res.json({
        status: false,
        message: "connot find user",
      });
    }

    res.json({
      status: true,
      message: "user fetched successfully",
      data: user,
    });
    console.log(user);
  } catch (error) {
    console.log("error in fetching user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    // all data
    const { id } = req.params;
    console.log("req.body---", req.body);

    const token = req.headers.authorization.split(' ')[1]
  
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
    console.log('decoded=----> ',decoded);
    if(decoded.id == id){
       const updatedUser = await users.findByIdAndUpdate(id, req.body, { returnDocument: 'after' });
    }

   
    
    

     
    
  

 

  
    console.log('data after updating-----> ',user);
  } catch (error) {
    console.log("error in updating user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    // all data
    const { id } = req.params;

    const user = await Users.findByIdAndDelete(id);

    console.log("data after delete-----> ", user);

    res.json({
      status: true,
      message: "user deleted successfully",
    });
    console.log(user);
  } catch (error) {
    console.log("error in deleting user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
       return    res.json({
        status: true,
        message: "all fields are required",
      }); 
    }
    const user = await Users.findOne({ email: email }); 
if(user == null ){
  return    res.json({
        status: true,
        message: "cannot find user",
      }); 
}
    if (user.password !=  password) {
   return  res.json({
        status: true,
        message: "invalid credentials",
      });
    }
    console.log('JWT SECRET-->',process.env.JWT_SECRET);
    
    const token = jwt.sign({id:user._id , email:user.email},process.env.JWT_SECRET,function (err,token){
  

       res.json({
        status: true,
        message: "user login successfully",
        user:user,
        token:token
      });
   
    })


     
    // console.log("logindata---->", user);
  } catch (error) {
    console.log("error in login user-->", error.message);

    res.json({
      status: false,
      message: error.message,
    });
  }
};

export { addUser, allUsers, getUser, updateUser, deleteUser, loginUser };
