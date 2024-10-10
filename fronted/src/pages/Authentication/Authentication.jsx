import { useState } from "react";
import Login from "../../components/Ui/Authentication/Login";
import Registration from "../../components/Ui/Authentication/Registration";


const Authentication = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex justify-center items-center py-6">
      <figure className="w-1/2 hidden lg:flex">
        <img
          src="https://i.ibb.co.com/JKG1V3v/Mobile-login-Cristina.jpg"
          alt="Login"
        />
      </figure>
      <div className="w-full lg:w-1/2 px-4 lg:px-10">
        {/* Tab Controls */}
        <div className="bg-[#49BBBD99] px-4 py-2 w-fit mx-auto flex justify-between gap-10 rounded-full">
          <button
            className={`${
              activeTab === "login" ? "bg-[#49BBBD]" : ""
            } text-white font-medium rounded-full px-6 py-2`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`${
              activeTab === "register" ? "bg-[#49BBBD]" : ""
            } text-white font-medium rounded-full px-6 py-2`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Form Display */}
        <div className="mt-8">
          {activeTab === "login" ? <Login /> : <Registration />}
        </div>
      </div>
    </div>
  );
};

export default Authentication;