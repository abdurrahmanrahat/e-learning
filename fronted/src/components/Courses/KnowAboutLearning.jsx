import { Link } from "react-router-dom";
import useUser from "../../Hooks/api/useUser";
import Button from "../Ui/Button";

const KnowAboutLearning = () => {

      const { user } = useUser();

      return (

            <div
                  className="flex flex-col lg:flex-row md:flex-row lg:py-10 md:py-10 bg-[#e0f2fe] items-center lg:gap-32 rounded-3xl"
            >
                  <div className="w-full lg:w-[40%] mt-5 lg:mt-0 flex items-center justify-center">
                        <div className="flex flex-col gap-10">
                              <h2 className="text-[30px] font-bold">
                                    Know about learning <br /> learning platform
                              </h2>
                              <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3">
                                          <button
                                                className="bg-[#55EFC4] p-3 rounded-full
  "
                                          ></button>
                                          <h2 className="text-[18px] font-semibold text-gray-500">
                                                Free E-book, video & consolation
                                          </h2>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <button
                                                className="bg-[#55EFC4] p-3 rounded-full
  "
                                          ></button>
                                          <h2 className="text-[18px] font-semibold text-gray-500 py-3">
                                                Top instructors from around world
                                          </h2>
                                    </div>
                                    <div className="flex items-center gap-3">
                                          <button
                                                className="bg-[#55EFC4] p-3 rounded-full
  "
                                          ></button>
                                          <h2 className="text-[18px] font-semibold text-gray-500">
                                                Top courses from your team
                                          </h2>
                                    </div>
                              </div>
                              <Link
                                    to={
                                          (user?.role === "student" &&
                                                "/dashboard/student/enrolled-courses") ||
                                          (user?.role === "instructor" &&
                                                "/dashboard/instructor/my-courses") ||
                                          (user?.role === "admin" &&
                                                "/dashboard/admin/all-courses") ||
                                          (!user && "/authentication")
                                    }
                              >
                                    <Button bgBtn={true}>
                                          {(user?.role === "instructor" && "Your Courses") ||
                                                (user?.role === "admin" && "See All The courses") ||
                                                "Start learning now"}
                                    </Button>
                              </Link>
                        </div>
                  </div>
                  <div className="w-full flex items-center justify-center lg:w-[50%] ">
                        <img
                              className="w-[650px] mt-10"
                              src="https://i.ibb.co.com/Hh0VX58/Group-71.png"
                              alt=""
                        />
                  </div>
            </div>

      );
};

export default KnowAboutLearning;