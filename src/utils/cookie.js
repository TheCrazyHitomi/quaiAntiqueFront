export const authCookieName = "AuthToken";

// -- fonction cookie SET --
export const setAuth = (token, role, days) => {
    const authData = JSON.stringify({token, role });
    console.log("✅ setAuth écrit :", authData);
    setCookie(authCookieName, authData, days);
};

// -- fonction cookie GET --
export const getAuth = () => {
    const data = getCookie(authCookieName);
    return data ? JSON.parse(data) : null;
};

// -- fonction cookie DELETE --
export const deleteAuth = () => {
    deleteCookie(authCookieName);
}

// export const tokenCookieName = "accessToken";

// export const setToken = (token, days) => {
//     setCookie(tokenCookieName, token, days);
// };

// export const getToken = () => {
//     return getCookie(tokenCookieName);
// };

// -- fonction cookie SET --
export const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    // -- fonction cookie GET --
export const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) 
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    };

    // -- fonction cookie DELETE --
export const deleteCookie = (name, role) => {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = role + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };


    // -- Vérification de la connexion --
export const isConnected = () => {
    if(getAuth() == null || getAuth() === undefined) {
        return false;
    } else {
        return true;
    }
};

// // Nom du cookie pour le rôle
// export const roleCookieName = "userRole";

// // -- Setter pour le rôle --
// export const setRole = (role, days) => {
//     setCookie(roleCookieName, role, days);
// };

// // -- Getter pour le rôle --
// export const getRole = () => {
//     return getCookie(roleCookieName);
// };

// // -- Supprimer le rôle --
// export const deleteRole = () => {
//     deleteCookie(roleCookieName);
// };