import React,{useEffect,useState} from 'react'
import supabase from '../config/index'
import ProductCard from './ProductCard'
import Navbar from './Navbar'



const Hero = () => {

const [product,setProduct] = useState([])
const [loader,setLoader] = useState(true)
  const apiCall = async () => {
        try {
            const { data, error } = await supabase
                .from('productCards')
                .select('*')
       
           console.log(data);
           setProduct(data)
           setLoader(false)
           

        } catch (error) {
            console.log(error);

        }
    
    }
        useEffect(()=>{
            console.log('useEffct');
            
apiCall()
        },[])
  return (
    <div className=''>
     <Navbar/>
        {loader  ?
          
               
 ( <span className="">Loading...</span>)
:
<div>
  {product.map((item,i)=>(
   <ProductCard key={item.id} id={item.id} price={item.price} name={item.name}/>
  ))}
  </div> 
        }

    </div>
  )
}

export default Hero