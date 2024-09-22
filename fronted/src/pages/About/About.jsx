import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import axios from 'axios';
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import CourseCard from "../../components/Ui/CourseCard";

const About = () => {

  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/popularCourses.json');
        setPopularCourses(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <div className="bg-[#49bbbd] text-[#2F327D] py-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold font-nunito mb-4">About Us</h1>
        <p className="font-roboto font-medium text-lg">Home । About</p>
      </div>

      <div className="lg:my-20 my-10 container-class md:p-4">
        <Totc />

        {/* popular courses */}
        <div className="my-10 lg:my-20">
          <PrimaryTitle
            headingPart1={"Our Popular"}
            headingPart2={"Course"}
            style={"text-center"}
            subtext={'Most Popular Course Of This Week'}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {
              popularCourses?.map(popularCourse => <CourseCard
                key={popularCourse?.id}
                popularCourse={popularCourse}
              ></CourseCard>)
            }
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
