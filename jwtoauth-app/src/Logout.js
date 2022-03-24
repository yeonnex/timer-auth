import {GoogleLogout} from "react-google-login";
import React, {useState} from "react";

const logout = () => {
    window.localStorage.removeItem("jwtToken") // 로그아웃시 토큰 삭제
    // window.gapi
}
const Logout = () => {
    return (
        <GoogleLogout
            clientId="161066289612-tcvuoneb8sa0q8mks8co6ep6kjgs9ir1.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
        >
        </GoogleLogout>
    )
}

export default Logout;