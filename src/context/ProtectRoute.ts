// import { useLocation, Navigate } from "react-router-dom";
// import React from "react";

// export const ProtectAdminRoute = ({children}:any) => {
//     const location = useLocation()
//     const isAuthenticated = localStorage.getItem('signature')
//     const userRole = localStorage.getItem('role')

//     if(!isAuthenticated ||userRole ==="user" ||  userRole ==="vendor"){
//         return (
//             <Navigate to="/login" state={{from:location} }/>
//         )
//     }
//     return children
// }

// export const ProtectRiderrRoute = ({children}:any) => {
//     const location = useLocation()
//     const isAuthenticated = localStorage.getItem('signature')
//     const userRole = localStorage.getItem('role')

//     if(!isAuthenticated || userRole ==="admin" ||  userRole ==="superadmin" || userRole ==="user"){
//         return (
//             <Navigate to="/login" state={{from:location} }/>
//         )
//     }
//     return children
// }
