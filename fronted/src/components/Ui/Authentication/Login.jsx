import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../../../utils/setUserInfo";
import toast from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const apiHandler = useAxios();
  const navigate = useNavigate();

  // Form submission handler
  const onSubmit = (data) => {
    const { email, password } = data;

    // Sending login request
    apiHandler
      .post("/auth/login", { email, password })
      .then((res) => {
        const { accessToken, refreshToken } = res?.data?.data || {};

        if (accessToken && refreshToken) {
          setUserInfo(accessToken, refreshToken);

          toast.success("Successfully logged In");

          navigate("/");
        } else {
          throw new Error("Invalid response from the server");
        }
      })
      .catch((err) => {
        console.log(err?.message);
        toast.error(err?.message || "Login failed. Please try again.");
      });
  };

  return (
    <div className=" px-4 lg:px-10 xl:px-10">
      <h1 className="text-center mb-5 text-xl">
        Welcome <span className="text-2xl text-primary font-bold">Back!!</span>
      </h1>

      <p className="text-[#5B5B5B] my-8">
        Please login your account and explore your favorite courses
      </p>

      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8">
          {/* Email input */}
          <div className="space-y-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* Password input */}
          <div className="space-y-2 relative">
            <label htmlFor="password">Password</label>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
              {...register("password", { required: true })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-10 right-5 cursor-pointer"
            >
              {showPassword ? (
                <BsEyeFill className="common-color text-xl" />
              ) : (
                <BsEyeSlashFill className="common-color text-xl" />
              )}
            </span>
            {errors.password && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* Remember Me and Forgot Password in one row */}
          <div className="flex justify-between items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
                className="form-checkbox text-[#49BBBD]"
              />
              <span className="text-[#5B5B5B]">Remember Me</span>
            </label>

            <a
              href="/forgot-password"
              className="text-[#49BBBD] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>

        <div className="flex justify-end">
          <input
            className="bg-[#49BBBD] px-12 py-4 w-fit rounded-xl text-white cursor-pointer"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
