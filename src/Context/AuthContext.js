import React,{ createContext,useContext ,useState}  from 'react'

const AuthContext=createContext();

const useAuth=()=>useContext(AuthContext)

const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        isAuthenticated:localStorage.getItem("AUTH_TOKEN")? true :false,
        user:JSON.parse(localStorage.getItem("ornate_user")),
        token:localStorage.getItem("AUTH_TOKEN" || ""),

    })

    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export {AuthProvider,useAuth}