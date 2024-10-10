import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import { IMAGES } from "../../../image-data";
import { setUserInfo } from "../../../utils/setUserInfo";

const GoogleLogin = () => {
  const navigate = useNavigate();

  const apiHandler = useAxios();

  const responseGoogle = async (authResult) => {
    try {
      console.log(authResult);
      if (authResult?.code) {
        const result = await apiHandler.get(
          `/auth/google?code=${authResult.code}`
        );

        const { accessToken, refreshToken } = result?.data?.data || {};
        if (accessToken && refreshToken) {
          setUserInfo(accessToken, refreshToken);

          toast.success("Successfully logged In");

          navigate("/");
        } else {
          toast.error("Invalid response from the server");
        }
      }
    } catch (error) {
      console.log("Error when requesting google auth:", error);
      toast.error(error?.message || "Something went wrong.");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div
      className="flex gap-2 justify-center items-center border border-myGray border-opacity-50 rounded-full mx-10 md:mx-20 cursor-pointer py-1"
      onClick={googleLogin}
    >
      <img
        src={IMAGES.OthersImages.GoogleLogo}
        alt="google logo"
        className="w-[40px]"
      />
      <button>Login With Google</button>
    </div>
  );
};

export default GoogleLogin;
