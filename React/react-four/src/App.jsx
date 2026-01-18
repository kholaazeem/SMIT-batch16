// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import AntSlider from './components/AntSlider'
// import AntForm from './components/AntForm'
// // import supabase from './config'

import DataFetch from "./components/DataFetch"

// function App() {
 


//  const [value,setValue] = useState('')
//  const [todos,setTodos]= useState(["hira","sana"])

//   const add=()=>{
// setTodos([...todos,value])
// setValue('')
  
//   }
//   const changeVal = (e)=>{
//     // console.log(e.target.value);
//     setValue(e.target.value)
//   }

//   return (
//     <>
   
//     <input type="text" value={value}  onChange={(e)=>changeVal(e)}/>

//     <button onClick={add}>inc</button>
//     <ul>
//       {todos.map((el,i)=>(
//         <li key={i}>{el}</li>
//       ))}
//     </ul>
//     <AntSlider/>
//     <AntForm/>
//     </>
//   )
// }

// export default App



const App =()=>{
   return(
    <>
    <DataFetch/>
    </>
   )
}


export default App
