
// import './App.css'



//   const Header = ()=>{

//     return(
//     < div className='header'>
//         <h1>My Application</h1>
//       </div>
//     )
//   }



// const App = ()=>{
//   return (
//     <>

//      <div className=''>Home</div>
//      </>
//   )
// }


// const Footer =()=>{
//   return(
    
//     <div className='footer'>
//        <h3>Footer Section</h3>
//          <App/>
//       <Header/>
    
     
//     </div>
//   )
// }

// export default Footer



import {Header }from "./components/Header"
import Navbar from "./components/Navbar"
import ThemeBtn from "./utils/ThemeBtn"
import Footer from "./components/Footer"
const App = ()=>{
  let myName = "something"
  return (
    <>
    <Navbar title={myName} roll={1273}  email ={'heragmail.com'}/>

    <br /><br />
    <br />
    <h1>main text</h1>
    <ThemeBtn value={'read more'}/>
{/* <Header/> */}

<br />
<br /><br />
<Footer/>

     </>
  )
}

export default App

