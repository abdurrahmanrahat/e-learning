import { SiMedibangpaint } from "react-icons/si";
import { IoMdArrowForward } from "react-icons/io";
import { useState } from "react";

const ExploreCourse = () => {


      const [activeCard, setActiveCard] = useState(4);

      const courses = [
            {
                  courseTitle: "Introduction to JavaScript",
                  bgColor: "#FF5733",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "Python for Data Science",
                  bgColor: "#33FF57",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "Full Stack Development",
                  bgColor: "#3357FF",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "Machine Learning",
                  bgColor: "#FF33A1",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "Cybersecurity",
                  bgColor: "#33FFF5",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "React.js Masterclass",
                  bgColor: "#FFA833",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "UI/UX Design",
                  bgColor: "#33FF99",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            },
            {
                  courseTitle: "Blockchain",
                  bgColor: "#FF9933",
                  detailsImage: "https://i.ibb.co.com/MpbBFYf/Detail.png"
            }
      ];

      const handleExpandCourse = (i) => {
            setActiveCard(activeCard === i ? 4 : i);
      };



      return (
            <div className="bg-[#ebf5ff] py-10">
                  <div className="max-w-[1500px] mx-auto p-4 lg:p-0 mt-10 font-roboto">
                        <h4 className="text-4xl font-bold font-roboto mb-3">Explore Course</h4>
                        <p className="font-roboto font-medium text-2xl">
                              Ut sed eros finibus, placerat orci id, dapibus.
                        </p>

                        {/* Course Cards */}
                        <div className="relative">
                              <div className="mb-10 mt-20 z-20 relative">
                                    <div className="flex items-center justify-between">
                                          <h4 className="flex items-center gap-3 text-3xl font-bold font-roboto">
                                                <SiMedibangpaint /> Lorem Ipsum
                                          </h4>
                                          <p className="text-[#00BCD4] text-2xl font-medium flex items-center gap-2">
                                                See all <IoMdArrowForward />
                                          </p>
                                    </div>

                                    <div className="lg:flex grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                                          {courses?.map((course, i) => (
                                                <div key={i} className="my-10 relative w-fit">

                                                      {activeCard === i ? (
                                                            <div className="">
                                                                  <img
                                                                        src={course.detailsImage}
                                                                        alt="Course Details"
                                                                        className="w-full h-full object-cover"
                                                                  />

                                                            </div>
                                                      ) : (

                                                            <div
                                                                  onClick={() => handleExpandCourse(i)}
                                                                  className="relative cursor-pointer"
                                                            >
                                                                  <img
                                                                        src="https://i.ibb.co.com/Wcn6WDW/Book.png"
                                                                        alt=""
                                                                        className=" object-cover"
                                                                  />
                                                                  <span
                                                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[80deg] h-10 w-60 font-medium rounded-full flex items-center justify-center"
                                                                        style={{ backgroundColor: course?.bgColor }}
                                                                  >
                                                                        {course?.courseTitle}
                                                                  </span>
                                                            </div>
                                                      )}
                                                </div>
                                          ))}
                                    </div>
                              </div>

                              <figure className="absolute -bottom-[-20px] z-10">
                                    <img src="https://i.ibb.co.com/1zyFm32/Rectangle.png" alt="" />
                              </figure>
                        </div>

                  </div>
            </div>
      );
};

export default ExploreCourse;
``