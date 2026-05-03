import  jwt from "jsonwebtoken";

const userCheck=(req,res,next)=>{
    const {id} = req.params
  try {

const token = req.headers?.authorization?.split(" ")[1] || req.cookies.token;
if(!token){
     res.json({
        status:false,
        message:'token not found'
    })

}
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  
if(decoded.id == id){
  
    next()
}
else{
    res.json({
        status:false,
        message:'invalid token'
    }) 
}
  console.log(decoded.id == id);
  



  } catch (error) {
    res.json({
        status:false,
        message:error.message
    })
  }

}


export {userCheck}