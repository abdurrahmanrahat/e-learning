import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { setUserInfo } from "../../utils/setUserInfo";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const apiHandler = useAxios();
  const navigate = useNavigate();

  // Handle image upload to ImageBB
  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile) return;

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      setUploading(true);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=4fcfecc8f4191aba98fe10068a124924`,
        formData
      );
      setImageUrl(res.data.data.url);
      setUploading(false);
      // toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image");
      setUploading(false);
    }
  };

  // Form submission handler
  const onSubmit = (data) => {
    if (imageUrl) {
      data.photoUrl = imageUrl; // Attach the uploaded image URL to the form data
    } else {
      toast.error("Please upload an image");
      return;
    }

    apiHandler
      .post("/users/register", data)
      .then((res) => {
        toast.success("User Created Successfully");

        // auto login request
        if (res) {
          apiHandler
            .post("/auth/login", { email: data.email, password: data.password })
            .then((response) => {
              const { accessToken, refreshToken } = response?.data?.data || {};

              if (accessToken && refreshToken) {
                setUserInfo(accessToken, refreshToken);
                navigate("/role-change");
              } else {
                throw new Error("Invalid response from the server");
              }
            });
        }
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  };

  return (
    <div className="container-class flex justify-center items-center gap-10 py-6">
      <figure className="w-1/2 hidden lg:flex xl:flex">
        <img
          className="w-full h-full"
          src="https://i.ibb.co.com/JKG1V3v/Mobile-login-Cristina.jpg"
          alt="Registration"
        />
      </figure>
      <div className="w-full lg:w-1/2 xl:w-1/2 px-4 lg:px-10 xl:px-10">
        <h1 className="text-center mb-5 text-xl">Welcome to <Link to="/"><span className="text-2xl text-primary font-bold">brainWave !!</span></Link></h1>

        {/* Form toggler */}
        <div className="bg-[#49BBBD99] px-4 py-2 w-fit mx-auto flex justify-between gap-10 rounded-full">
          <Link to="/registration">
            <button className="bg-[#49BBBD] text-white font-medium rounded-full px-6 py-2">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="text-white font-medium rounded-full px-6 py-2">
              Login
            </button>
          </Link>
        </div>

        <p className="text-[#5B5B5B] my-8">
          Join our platform and unlock exclusive benefits. Fill in the details
          below to get started.
        </p>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            {/* Name input */}
            <div className="flex flex-col lg:flex-row xl:flex-row gap-6 lg:gap-4 xl:gap-4">
              <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                <label htmlFor="name">User name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              {/* Email input */}
              <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
            </div>

            {/* Password input */}
            <div className="space-y-2 relative">
              <label htmlFor="password">Password</label>
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
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

            {/* Gender Selection */}
            <div className="space-y-2">
              <label htmlFor="gender">Gender</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="male"
                    {...register("gender", { required: true })}
                    className="form-radio text-[#49BBBD]"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="female"
                    {...register("gender", { required: true })}
                    className="form-radio text-[#49BBBD]"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
              {errors.gender && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            {/* Image Upload Input */}
            <div className="space-y-2">
              <label htmlFor="photoUrl">Profile Photo</label>
              <input
                type="file"
                name="photo"
                id="photoUrl"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-6 py-3 border border-[#49BBBD] placeholder:text-[#ACACAC] placeholder:text-base placeholder:font-light outline-none  rounded-xl focus:ring-2 focus:ring-[#49BBBD] focus:border-[#49BBBD] focus:bg-[#E8F9F9]"
              />
              {uploading && (
                <p className="text-green-600">Uploading image...</p>
              )}
              {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <input
              className="bg-[#49BBBD] px-12 py-4 w-fit  rounded-xl text-white cursor-pointer"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
