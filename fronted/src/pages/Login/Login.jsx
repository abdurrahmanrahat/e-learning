import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
      const [showPassword, setShowPassword] = useState(false);

      const { register, handleSubmit, formState: { errors } } = useForm();

      // Form submission handler
      const onSubmit = (data) => {
            const { email, password, rememberMe } = data;

            // Password validation
            if (password.length < 6) {
                  return toast.error('Password must have at least 6 characters!');
            }
            if (!/[A-Z]/.test(password)) {
                  return toast.error('Password must contain at least one uppercase letter!');
            }
            if (!/[a-z]/.test(password)) {
                  return toast.error('Password must contain at least one lowercase letter!');
            }

            console.log(data); // Log form data including "rememberMe"
            toast.success('Login successful!');
      };

      return (
            <div className="max-w-[1300px] mx-auto p-4 lg:p-0 flex items-center justify-between my-10 lg:my-20">
                  <div className="lg:w-[45%] hidden lg:flex">
                        <img src="https://i.ibb.co.com/Tv98QzM/3094352.jpg" alt="Login" />
                  </div>
                  <div className="lg:w-[45%] w-full">
                        <h1 className="text-center mb-5 text-2xl">Welcome Back!</h1>

                        {/* Form toggler */}
                        <div className="bg-[#49BBBD99] px-5 py-4 w-fit mx-auto flex justify-between rounded-full">
                              <Link to='/registration'>
                                    <button className="text-white font-medium rounded-full px-7 py-3">Register</button>
                              </Link>
                              <Link to='/login'>
                                    <button className="bg-[#49BBBD] text-white font-medium rounded-full px-7 py-3">Login</button>
                              </Link>
                        </div>

                        <p className="text-[#5B5B5B] my-8">
                              Join our platform and unlock exclusive benefits. Fill in the details below to get started.
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
                                                className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-full"
                                                {...register("email", { required: true })}
                                          />
                                          {errors.email && <span className="text-red-600">This field is required</span>}
                                    </div>

                                    {/* Password input */}
                                    <div className="space-y-2 relative">
                                          <label htmlFor="password">Password</label>
                                          <input
                                                type={`${showPassword ? "text" : "password"}`}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none rounded-full"
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
                                          {errors.password && <span className="text-red-600">This field is required</span>}
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

                                          <a href="/forgot-password" className="text-[#49BBBD] hover:underline">Forgot Password?</a>
                                    </div>
                              </div>

                              <div className="flex justify-end">
                                    <input
                                          className="bg-[#49BBBD] px-12 py-4 w-fit rounded-full text-white cursor-pointer"
                                          type="submit"
                                          value="Login"
                                    />
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default Login;
