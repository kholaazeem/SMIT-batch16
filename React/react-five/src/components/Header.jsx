import React,{useEffect,useState} from 'react'

const Header = () => {
  const [num,setNum] = useState(0)
    const [name,setName] = useState('user')


    useEffect(()=>{
console.log('hi'); 

    },[])  // component render



     useEffect(()=>{
console.log('state updated');

     },[num])




     useEffect(()=>{
        console.log('first time or hr state k update p');
        
     })

  return (
    <>
    <div>{num}</div>
    <button onClick={()=>setNum(num + 1)}>+</button>
    <br />
     <div>{name}</div>
    <button onClick={()=>setName('hira')}>change name</button>
</>
  )
}

export default Header