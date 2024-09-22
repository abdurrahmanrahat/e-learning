import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import axios from 'axios';
import CourseCard from "./CourseCard";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom css
import './Instructor.css';

// Import required modules
import { Navigation } from 'swiper/modules';

const About = () => {

  const [popularCourses, setPopularCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/popularCourses.json');
        setPopularCourses(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    const fetchInstructors = async () => {
      try {
        const response = await axios.get('/instructors.json');
        setInstructors(response?.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
    fetchInstructors();
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

        {/* Swiper Slider for Instructors */}
        <div className="my-10 lg:my-20">
          <PrimaryTitle
            headingPart1={"Certified"}
            headingPart2={"Instructors"}
            style={"text-center lg:w-[60%] mx-auto"}
            subtext={'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'}
          />

          <div className="mt-16 relative">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}

              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                '@1.50': {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {
                instructors?.map(instructor => (
                  <SwiperSlide key={instructor?.id}>
                    <div className="flex flex-col text-center items-center justify-center">
                      <figure className="mb-5">
                        <img className="rounded-full w-48 h-48 border p-3 bg-gray-100" src={instructor?.profilePic} alt="" />
                      </figure>
                      <h2 className="text-2xl text-[#2F327D] font-semibold font-nunito transition delay-100 cursor-pointer">{instructor?.title}</h2>
                      <span className="text-[#6E7697] flex items-center gap-2"> Data Scientist</span>
                      <p className="mt-4 text-[#6E7697] text-center">{instructor?.shortBio}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            {/* Navigation Buttons */}
            <div className="swiper-button-next right-0 top-1/2 -translate-y-1/2 absolute text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"></div>
            <div className="swiper-button-prev left-0 top-1/2 -translate-y-1/2 absolute text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"></div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default About;
