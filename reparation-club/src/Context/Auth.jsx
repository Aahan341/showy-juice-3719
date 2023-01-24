import React, { useState } from 'react'
import { createContext } from 'react';

export const Authcontext = createContext();
export default function Auth({children}) {

    const [authstate,setAuth] = useState({isAuth:false,token:null})

    const login=(val)=>{

        setAuth({
            ...authstate,
            isAuth:true,
            token:val
        })

    }

    const logout =()=>{

        setAuth({
            ...authstate,
            isAuth:false,
            token:null
        })

    }
    
  return (
    <Authcontext.Provider value={{authstate,login,logout}}>
        {children}
    </Authcontext.Provider>
  )
}
