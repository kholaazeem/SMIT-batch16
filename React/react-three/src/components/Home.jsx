import React from 'react'




const Home = ({value,myValue}) => {
  

    let fullName = "user"
    myValue(fullName)
  return (
    <div>

      {value}  
    </div>
  )
}

export default Home