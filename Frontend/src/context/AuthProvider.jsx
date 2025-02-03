import React, { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const AuthContext=createContext();


export default function AuthProvider({children}) {

  const initialUser=localStorage.getItem("User")
  const[authUser, setAuthUser]=useState(
    initialUser ? JSON.parse(initialUser) : undefined
  )


  return (
    <div>
      <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export const useAuth=()=>useContext(AuthContext)
