import {useState} from 'react'
import Logo from '../assets/images/mainlogo.png'


const Hero = () => {
 let a = 0//variable


 const [num,setNum] = useState(0)




function incValu (){
setNum(num + 1)


}

function decValu (){
setNum(num - 1)
if(num <= 0){
    setNum(0)
}


}
  return (
    <div>{num}
    <br />
    {/* <img src={Logo} alt="" /> */}
    <button onClick={()=>incValu()} className='btn btn-primary'>+</button>
    <button onClick={()=>decValu()} disabled={num == 0} className='btn btn-outline-primary'>-</button>
    </div>
  )
}

export default Hero