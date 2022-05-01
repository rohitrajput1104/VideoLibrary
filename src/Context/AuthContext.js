import React,{ createContext,useContext ,useState}  from 'react'

const AuthContext=createContext();

const useAuth=()=>useContext(AuthContext)

const AuthProvider=({children})=>{
    const toastProps={
        theme:"light",
        closeOnClick:true,
        autoClose:1000,
        pauseOnHover:true,
        position:"bottom-center",
    }
    const [auth,setAuth]=useState({
        isAuthenticated:localStorage.getItem("AUTH_TOKEN")? true :false,
        user:JSON.parse(localStorage.getItem("ornate_user")),
        token:localStorage.getItem("AUTH_TOKEN" || ""),

    })

    return(
        <AuthContext.Provider value={{auth,setAuth,toastProps}}>
            {children}
        </AuthContext.Provider>
        
    )
}

export {AuthProvider,useAuth}