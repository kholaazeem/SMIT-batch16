import React,{useState} from 'react'
import ProductForm from './ProductForm'
import DisplayProduct from './DisplayProduct'

const Product = () => {
     const [email,setemail] = useState("")
        const [password,setpassword] = useState("")
    
  return (
    <div className='flex h-screen'>

        <ProductForm email={email} password={password} setemail={setemail} setpassword={setpassword}/>
        <DisplayProduct email={email} password={password} setemail={setemail} setpassword={setpassword}/>
    </div>
  )
}

export default Product