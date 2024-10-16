import { FaCirclePlay } from "react-icons/fa6";
import PageBanner from "../../components/Ui/PageBanner";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Ui/Tabs";
import CourseCard from "../../components/Ui/CourseCard";
import Rating from "../../components/Ui/Rating";
import {SHAREDImages} from "../../image-data/shared"
import useUserByEmail from "../../Hooks/api/useUserByEmail";
import { useCoursesByEmail } from "../../Hooks/api/useCoursesByEmail";

export default function InstructorDetails() {
  const { email } = useParams();
  const {user} = useUserByEmail(email);
  const {courses} = useCoursesByEmail(email);

  const tabs = ["About", "Courses", "Reviews"];
  const tabItems = [
    {
      title: "About",
      content: (
        <p>
          A seasoned JavaScript developer with over 10 years of experience. John
          specializes in teaching beginners the core concepts of JavaScript
          through interactive, hands-on learning. His course, has received high
          praise for its clarity and depth.
        </p>
      ),
    },
    {
      title: "Published Courses",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-6">
          {courses?.map((item) => (
            <CourseCard key={item?.id} popularCourse={item}></CourseCard>
          ))}
          {courses.length <= 0 && 'No data found...'}
        </div>
      ),
    },
    {
      title: "Students Review",
      content: (
        <div className="flex flex-col gap-10">
          {/* {reviews.map((item) => (
            <ReviewCard key={item?.id} review={item}></ReviewCard>
          ))} */}
          This Feature Is Coming soon...
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageBanner image={SHAREDImages.banner_1}>
        <div className="flex justify-center items-center gap-10 w-full lg:container-class xl:container-class h-[80%]">
          <div className="w-[30vh] hidden xl:flex lg:flex justify-center items-center">
            <figure className="rounded-full border-[6px] border-[#FFF] w-full">
              <img
                className="w-full rounded-full"
                src={user?.photoUrl}
                alt=""
              />
            </figure>
          </div>
          <div className="bg-white text-slate-500 shadow-md rounded-xl w-11/12 xl:w-[70%] lg:w-[70%] p-6 flex flex-col justify-between">
            <div className="w-full flex justify-center">
            <figure className="rounded-full border-[6px] border-[#FFF] w-[40%] flex  xl:hidden lg:hidden justify-center items-center">
              <img
                className="w-full rounded-full"
                src={user?.image}
                alt=""
              />
            </figure>

            </div>
            {/*  <!-- Body--> */}
            <div className="">
              <header className="mb-4 flex justify-center xl:justify-between lg:justify-between gap-4">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-slate-700">
                    {user?.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {user?.title || "No content here"}
                  </p>
                </div>
                <button className="hidden xl:inline-flex lg:inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200">
                  <span>Enroll Now</span>
                </button>
              </header>
              <p className="text-center lg:text-start xl:text-start text-sm">{user?.about || "No content here"}</p>
            </div>
            {/*  <!-- Action base sized link button --> */}
            <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center gap-2 pt-6">
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <Rating value={user?.ratings || "No content here"} />
                </span>
                <span>Student Rating</span>
              </div>
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <FaCirclePlay />
                </span>
                <span>{user?.numOfCourses || 0} published Courses</span>
              </div>
            </div>
          </div>
        </div>
      </PageBanner>
      <div className="py-10 container-class px-10">
        <Tabs tabs={tabs} tabItems={tabItems} />
      </div>
    </div>
  );
}
