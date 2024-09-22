import { FaCirclePlay, FaStar } from "react-icons/fa6";
import PageBanner from "../../components/Ui/PageBanner";
import { INSTRUCTORImages } from "../../image-data/Instructors";
import { useParams } from "react-router-dom";
import Tabs from "../../components/Ui/Tabs";
import { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(`courses`, instructCourses);
  console.log(`reviews`, reviews);

  const tabs = ["About", "Courses", "Reviews"];
  const tabItems = {
      about:
        "A seasoned JavaScript developer with over 10 years of experience. John specializes in teaching beginners the core concepts of JavaScript through interactive, hands-on learning. His course, has received high praise for its clarity and depth.", //instructor profile will be provided thi about data
      instructCourses, //fetch in data base
      reviews, //fetch in data base
    }

  return (
    <div>
      <PageBanner>
        <div className="flex gap-10 container-class h-[80%]">
          <div className="w-[30%] flex justify-center items-center">
            <figure className="rounded-full border-[6px] border-[#FFF] w-60">
              <img
                className="w-full rounded-full"
                src={currInstructor.image}
                alt=""
              />
            </figure>
          </div>
          <div className="bg-white text-slate-500 shadow-md rounded-xl w-[70%] p-6 flex flex-col justify-between">
            {/*  <!-- Body--> */}
            <div className="">
              <header className="mb-4 flex justify-between gap-4">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-slate-700">
                    {currInstructor.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {currInstructor.title}
                  </p>
                </div>
                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200">
                  <span>Enroll Now</span>
                </button>
              </header>
              <p className="text-start text-sm">{currInstructor.about}</p>
            </div>
            {/*  <!-- Action base sized link button --> */}
            <div className="flex justify-between items-center gap-2 pt-0">
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <FaStar />
                </span>
                <span>{currInstructor.ratings} Student Rating</span>
              </div>
              <div className="flex gap-2 items-center justify-center text-base">
                <span>
                  <FaCirclePlay />
                </span>
                <span>{currInstructor.numOfCourses} published Courses</span>
              </div>
              {/* <Link to={`/instructor-details/${id}`}>
                <button className="inline-flex h-10 items-center justify-center gap-2 hover:text-[#00CBB8]">
                  <span>Details</span>
                  <span>
                    <FaArrowRightLong />
                  </span>
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </PageBanner>
      <div className="my-10 container-class">
        <Tabs tabs={tabs} tabItems={tabItems} />
      </div>
    </div>
  );
}
