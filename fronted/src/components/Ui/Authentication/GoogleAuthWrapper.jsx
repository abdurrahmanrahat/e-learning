import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./GoogleLogin";

const GoogleAuthWrapper = () => {
  return (
    <GoogleOAuthProvider clientId="829366581205-o1llkrr9to17lvu95kc9948ftib638ao.apps.googleusercontent.com">
      <GoogleLogin />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthWrapper;
