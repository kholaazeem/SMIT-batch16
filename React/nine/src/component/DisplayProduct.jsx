import React from 'react'

const DisplayProduct = ({email,password,setemail,setpassword}) => {
  return (

    <div className='w-1/2'>{email}, pASSOWRD: {password}</div>
  )
}

export default DisplayProduct