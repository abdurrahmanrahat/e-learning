import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const setUserInfo = (accessToken, refreshToken) => {
    // Store Access token in browser cookies
    Cookies.set("accessToken", accessToken);

    // Store refresh token in local storage
    localStorage.setItem("refreshToken", refreshToken);

    // decode accessToken and get user info
    const userInfo = jwtDecode(accessToken);

    // const userInfo = { email: decode?.email, role: decode?.role };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}