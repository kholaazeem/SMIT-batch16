import React, { useState,useEffect } from 'react'
import supabase from '../config'

const DataFetch = () => {

    const [products,setProducts] = useState([])
    const apiCall = async () => {
        try {
            const { data, error } = await supabase
                .from('productCards')
                .select('*')
           setProducts(data)
           console.log(products);
           

        } catch (error) {
            console.log(error);

        }
        
    }
   





// useEffect(()=>{
//   apiCall()
//   console.log('api call....');
  
// },[])
// useEffect(()=>{
// apiCall()
// },[products])











    return (
        <div>
           
        </div>
    )
}

export default DataFetch