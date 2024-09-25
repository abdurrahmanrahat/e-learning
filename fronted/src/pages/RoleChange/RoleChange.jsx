import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { HOMEImages } from "../../image-data/home";
import { getUser } from "../../utils/getUser";

const RoleChange = () => {
  const navigate = useNavigate();
  const apiHandler = useAxios();

  const userInfo = getUser();

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const handleStudent = () => {
    toast.success("Role updated successfully.");
    navigate("/");
  };
  console.log(userInfo);

  const handleInstructor = () => {
    apiHandler
      .patch(`/users/${userInfo?.email}`, { role: "instructor" })
      .then((res) => {
        if (res.data.success) {
          // after role change, need to save local storage.
          console.log(res);

          const updatedUserInfo = {
            name: res.data.data.name,
            email: res.data.data.email,
            role: res.data.data.role,
            photoUrl: res.data.data.photoUrl,
            gender: res.data.data.gender,
          };

          localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

          toast.success(res.data.message || "Role updated Successfully.");
          navigate("/");
        }
      });
  };

  return (
    <div className="container-class py-[100px]">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="rounded-xl relative">
          <div className="relative">
            <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0 rounded-xl"></div>
            <figure className="rounded-xl">
              <img className=" w-full" src={HOMEImages.totc_1} alt="" />
            </figure>
          </div>

          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-[24px] font-medium mb-2 ">
              Are you a Student?
            </h4>
            <button
              className="rounded-full border-[2px] border-[white] text-white px-7 py-3 hover:bg-[#23BDEE] hover:border-[#23BDEE] transition-colors duration-300"
              onClick={handleStudent}
            >
              Yes
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="relative">
            <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0 rounded-xl"></div>
            <figure className=" rounded-xl">
              <img
                className="rounded-xl w-full"
                src={HOMEImages.totc_2}
                alt=""
              />
            </figure>
          </div>
          <div className="absolute w-full top-[45%] left-0 text-center text-white">
            <h4 className="text-[24px] font-medium mb-2 ">
              Are you a Instructor?
            </h4>
            <button
              className="rounded-full border-[2px] border-[white]  px-7 py-3 hover:bg-primary hover:border-primary transition-colors duration-300"
              onClick={handleInstructor}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleChange;
