import Cookies from "js-cookie";

export const removeUserInfo = () => {
    Cookies.remove("refreshToken");

    localStorage.removeItem('userInfo');
    localStorage.removeItem('accessToken');
}