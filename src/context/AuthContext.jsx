import React, { createContext, useState , useEffect } from "react";

import { setAuth, getAuth, deleteAuth } from "../utils/cookie";

// import { isConnected, getToken, deleteCookie, tokenCookieName, getRole, roleCookieName } from "../utils/cookie";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setUserRole] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        console.log("📦 getAuth renvoie :", auth);
        if (auth) {
            setToken(auth.token);
            setUserRole(auth.role);
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token, userRole, rememberMe = false) => {
        console.log("👉 login() appelé avec :", token, userRole);
        setAuth(token, userRole, rememberMe ? 7 : null); // Stocke le token et le rôle dans un cookie pendant 7 jours si "Se souvenir de moi" est coché
        setUserRole(userRole);
        setToken(token);
        setIsLoggedIn(true);
    }

    const logout = () => {
        deleteAuth();
        setIsLoggedIn(false);
        setUserRole(null);
        setToken(null);
    }

//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [role, setUserRole] = useState(null);

//     // Vérifie au montage
//     useEffect(() => {
//         setIsLoggedIn(isConnected());
//         const storedRole = getRole();
//         if (storedRole) setUserRole(storedRole);
//     }, []);

//     const login = (token, userRole) => {
//         localStorage.setItem("token", token);
//         setUserRole(userRole);
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         deleteCookie(tokenCookieName);
//         deleteCookie(roleCookieName);
//         setIsLoggedIn(false);
//     };

    return (
        <AuthContext.Provider value={{ isLoggedIn, role , token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};