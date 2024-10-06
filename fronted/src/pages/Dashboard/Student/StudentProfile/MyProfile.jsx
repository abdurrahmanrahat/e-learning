import { useState } from "react";
import { useForm } from "react-hook-form";
import useUser from "../../../../Hooks/api/useUser";
const MyProfile = () => {
  const { user } = useUser();
  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditStudentProfile = (data) => {
    const editProfile = {
      studentName: user?.name,
      studentEmail: user?.email,
      studentImg: user?.photoUrl,
      studentNationality: data?.nationality,
      studentEducationLevel: data?.level,
      studentDateOfBirth: data?.date,
      studentId: data?.studentId,
    };
    console.log(editProfile);
  };

  return (
    <div className="py-10">
      <h2 className="text-xl font-bold text-gray-600">My Profile</h2>
      <div className="flex flex-col lg:flex-row gap-5 mt-6">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">Full name</h2>
          <h2 className="text-md font-semibold ">{user?.name}</h2>
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">Email</h2>
          <h2 className="text-md font-semibold ">{user?.email}</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">
            Education Level
          </h2>
          <h2 className="text-md font-semibold ">Wab developer</h2>
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">Date of Birth</h2>
          <h2 className="text-md font-semibold ">08-05-2005</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">Student Id</h2>
          <h2 className="text-md font-semibold ">WEB-123</h2>
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-lg font-semibold text-gray-500">Nationality</h2>
          <h2 className="text-md font-semibold ">Bangladesh</h2>
        </div>
      </div>
      <button
        onClick={toggleModal}
        className="border px-4 py-2 font-bold mt-10 hover:bg-[#4bc0c0] border-[#4bc0c0] hover:text-white"
      >
        Edit Profile
      </button>

      <div>
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
            isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Background overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isModalOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleModal}
          ></div>
          {/* model box  */}
          <div
            className={`relative p-4 w-full max-w-4xl bg-white rounded-lg shadow dark:bg-gray-700 transform transition-transform duration-300 ${
              isModalOpen ? "scale-100" : "scale-75"
            }`}
          >
            {/* modal content  */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-h-[80vh]  overflow-y-auto overflow-x-auto">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4 text-red-600 font-bold"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            {/* modal body  */}
            <div className="p-6">
              <h1 className=" text-xl font-bold mb-5">Edit Profile</h1>
              <div>
                <form onSubmit={handleSubmit(handleEditStudentProfile)}>
                  <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-5">
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Full Name :
                        </span>
                      </label>
                      <input
                        type="title"
                        defaultValue={user?.name}
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("title", { required: true })}
                      />
                    </div>
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Email :
                        </span>
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("email", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5">
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Student ID :
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="student id"
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("studentId", { required: true })}
                      />
                    </div>
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Date of birth :
                        </span>
                      </label>
                      <input
                        type="date"
                        placeholder="last name"
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("date", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mt-5">
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Educational Level :
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="education"
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("level", { required: true })}
                      />
                    </div>
                    <div className="w-full lg:w-[50%]">
                      <label className="label">
                        <span className="label-text font-semibold text-md text-gray-600">
                          Nationality :
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nationality"
                        className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#4bc0c0]"
                        required
                        {...register("nationality", { required: true })}
                      />
                    </div>
                  </div>
                  {/* Gender Selection */}
                  <div className="mt-4">
                    <label
                      className="label-text font-semibold text-md text-gray-600 "
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <div className="flex items-center space-x-4 mt-2">
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
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <button className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-10 bg-[#4bc0c0] border-[#4bc0c0] text-white text-xl">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
