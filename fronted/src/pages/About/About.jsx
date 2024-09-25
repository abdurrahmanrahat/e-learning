import axios from "axios";
import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";

// Import required modules
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";
import Testimonials from "../../components/Ui/Testimonials/Testimonials";
import { SHAREDImages } from "../../image-data/shared"
import { INSTRUCTORImages } from "../../image-data/Instructors";
import InstructorCard from "../../components/Ui/InstructorCard";

const About = () => {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/popularCourses.json");
        setPopularCourses(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
  }, []);

  const instructorData = [
    {
      id: 1,
      name: "John Doe",
      title: "Web Developer",
      image: INSTRUCTORImages.instructor_1,
      ratings: 4,
      numOfCourses: 12,
      about: "John is a highly skilled web developer with over 5 years of experience in building responsive websites and web applications."
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "SEO Expert",
      image: INSTRUCTORImages.instructor_2,
      ratings: 3,
      numOfCourses: 8,
      about: "Jane is an expert in search engine optimization, helping businesses rank higher on search engines and boost organic traffic."
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Mobile App Developer",
      image: INSTRUCTORImages.instructor_3,
      ratings: 5,
      numOfCourses: 15,
      about: "Michael specializes in mobile app development, creating user-friendly and innovative mobile applications for Android and iOS."
    },
    {
      id: 4,
      name: "Emily Davis",
      title: "UI/UX Designer",
      image: INSTRUCTORImages.instructor_1,
      ratings: 2,
      numOfCourses: 10,
      about: "Emily is a creative UI/UX designer with a passion for designing intuitive and visually appealing user interfaces."
    },
  ];

  return (
    <div>
      <PageBanner image={SHAREDImages.banner_1}>
        <h1 className="text-5xl">About Us</h1>
      </PageBanner>

      <div className="lg:my-20 my-10 ">
        <div className="container-class md:p-4">
          <Totc />
        </div>

        {/* Mission And Vission */}
        <div className="container-class md:p-4 mt-10 lg:mt-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[50%]">
              <img
                className="rounded-xl"
                src="https://i.ibb.co.com/VJMKM9s/122864.jpg"
                alt=""
              />
            </div>
            <div className="lg:w-[40%] mt-8 lg:mt-0">
              <PrimaryTitle
                headingPart1={"Our"}
                headingPart2={"Mission & Vision"}
                style={""}
              />
              <p className="text-[#696984] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                suscipit, repudiandae similique accusantium eius nulla quam
                laudantium sequi.
              </p>
              <p className="text-[#696984] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                suscipit, repudiandae similique accusantium eius nulla quam
                laudantium sequi.
              </p>
              <p className="text-[#696984]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                suscipit, repudiandae similique accusantium eius nulla quam
                laudantium sequi.
              </p>
            </div>
          </div>
        </div>

        {/* popular courses */}
        <div className="my-10 lg:my-20 container-class md:p-4">
          <PrimaryTitle
            headingPart1={"Our Popular"}
            headingPart2={"Course"}
            style={"text-center"}
            subtext={"Most Popular Course Of This Week"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {popularCourses?.map((popularCourse) => (
              <CourseCard
                key={popularCourse?.id}
                popularCourse={popularCourse}
              ></CourseCard>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Popular Instructors */}
        <div className="my-10 lg:my-20 container-class md:p-4">
          <PrimaryTitle
            headingPart1={"Most Popular"}
            headingPart2={"Instructors"}
            style={"text-center lg:w-[60%] mx-auto"}
            subtext={
              "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
            }
          />

          {/* Instructors cards */}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-14 py-10">
            {
              instructorData?.map(item => <InstructorCard key={item.id} item={item}>
              </InstructorCard>)
            }
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
