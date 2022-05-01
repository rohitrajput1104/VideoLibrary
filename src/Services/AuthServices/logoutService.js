export const LogOutService=()=>{
    localStorage.removeItem("ornate_user");
    localStorage.removeItem("AUTH_TOKEN")
}