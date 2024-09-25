import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const setUserInfo = (accessToken, refreshToken) => {
    // Store refresh token in browser cookies
    Cookies.set("refreshToken", refreshToken);

    // Store access token in local storage
    localStorage.setItem("accessToken", accessToken);

    // decode accessToken and get user info
    const userInfo = jwtDecode(accessToken);

    // const userInfo = { email: decode?.email, role: decode?.role };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
}