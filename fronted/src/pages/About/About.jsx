import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import axios from "axios";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";

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

  return (
    <div>
      <PageBanner>
        <h1 className="">About Us</h1>
      </PageBanner>

      <div className="lg:my-20 my-10 container-class md:p-4">
        <Totc />

        {/* popular courses */}
        <div className="my-10 lg:my-20">
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
      </div>
    </div>
  );
};

export default About;
