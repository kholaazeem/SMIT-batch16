import supabase from '../config/index'
import { createContext, useEffect, useState } from 'react'

const Auth = createContext()


import React from 'react'

const AuthContext = () => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)


useEffect(()=>{
    const getUser
})

  return (
    <Auth.Provider VALUE>
        DHILDREN
    </Auth.Provider>
  )
}

export default AuthContext