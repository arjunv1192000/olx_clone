import { createContext, useState} from 'react'

 
export  const firebaseContext=createContext(null)  
export  const AuthContext=createContext(null)


export  function Context ({children}){

    const [user,setuser]=useState(null)

    return(
        <AuthContext.Provider value={{ user,setuser }}>
            {children}

        </AuthContext.Provider>
    )


}

export default firebaseContext;


