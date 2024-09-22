import { FaCirclePlay } from "react-icons/fa6";
import PageBanner from "../../components/Ui/PageBanner";
import { INSTRUCTORImages } from "../../image-data/Instructors";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Ui/Tabs";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../../components/Ui/ReviewCard";
import CourseCard from "../../components/Ui/CourseCard";
import Rating from "../../components/Ui/Rating";

const instructorData = [
  {
    id: 1,
    name: "John Doe",
    title: "Web Developer",
    image: INSTRUCTORImages.instructor_1,
    ratings: 4,
    numOfCourses: 12,
    about:
      "John is a highly skilled web developer with over 5 years of experience in building responsive websites and web applications.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "SEO Expert",
    image: INSTRUCTORImages.instructor_2,
    ratings: 3,
    numOfCourses: 8,
    about:
      "Jane is an expert in search engine optimization, helping businesses rank higher on search engines and boost organic traffic.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Mobile App Developer",
    image: INSTRUCTORImages.instructor_3,
    ratings: 5,
    numOfCourses: 15,
    about:
      "Michael specializes in mobile app development, creating user-friendly and innovative mobile applications for Android and iOS.",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    image: INSTRUCTORImages.instructor_1,
    ratings: 2,
    numOfCourses: 10,
    about:
      "Emily is a creative UI/UX designer with a passion for designing intuitive and visually appealing user interfaces.",
  },
];

export default function InstructorDetails() {
  const { id } = useParams();
  const [instructCourses, setInstructorCourses] = useState([]);
  const [reviews, setReviews] = useState([]);

  const currInstructor = instructorData?.find((item) => item.id === Number(id));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "../../../public/InstructorCourses.json"
        );
        if (response.status === 200) {
          setInstructorCourses(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    const fetchReviews = async () => {
      try {
        const response = await axios.get("../../../public/reviews.json");
        if (response.status === 200) {
          setReviews(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
    fetchReviews();
  }, []);

  // console.log(`courses`, instructCourses);
  // console.log(`reviews`, reviews);

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
          {instructCourses.map((item) => (
            <CourseCard key={item?.id} popularCourse={item}></CourseCard>
          ))}
        </div>
      ),
    },
    {
      title: "Students Review",
      content: (
        <div className="flex flex-col gap-10">
          {reviews.map((item) => (
            <ReviewCard key={item?.id} review={item}></ReviewCard>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageBanner>
        <div className="flex justify-center items-center gap-10 container-class h-[80%]">
          <div className="w-[30vh] hidden xl:flex lg:flex justify-center items-center">
            <figure className="rounded-full border-[6px] border-[#FFF] w-full">
              <img
                className="w-full rounded-full"
                src={currInstructor.image}
                alt=""
              />
            </figure>
          </div>
          <div className="bg-white text-slate-500 shadow-md rounded-xl w-[70%] p-6 flex flex-col justify-between">
            <div className="w-full flex justify-center">
            <figure className="rounded-full border-[6px] border-[#FFF] w-[20%] flex  xl:hidden lg:hidden justify-center items-center">
              <img
                className="w-full rounded-full"
                src={currInstructor.image}
                alt=""
              />
            </figure>

            </div>
            {/*  <!-- Body--> */}
            <div className="">
              <header className="mb-4 flex justify-center xl:justify-between lg:justify-between gap-4">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-slate-700">
                    {currInstructor.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {currInstructor.title}
                  </p>
                </div>
                <button className="hidden xl:inline-flex lg:inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200">
                  <span>Enroll Now</span>
                </button>
              </header>
              <p className="text-center lg:text-start xl:text-start text-sm">{currInstructor.about}</p>
            </div>
            {/*  <!-- Action base sized link button --> */}
            <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center gap-2 pt-6">
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <Rating value={currInstructor.ratings} />
                </span>
                <span>Student Rating</span>
              </div>
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <FaCirclePlay />
                </span>
                <span>{currInstructor.numOfCourses} published Courses</span>
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
