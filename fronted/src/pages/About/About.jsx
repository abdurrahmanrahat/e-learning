import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import axios from "axios";
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
import CourseCard from "../../components/Ui/CourseCard";
import PageBanner from "../../components/Ui/PageBanner";
import Testimonials from "../../components/Ui/Testimonials/Testimonials";

const About = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/popularCourses.json");
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
      <PageBanner>
        <h1 className="">About Us</h1>
      </PageBanner>

      <div className="lg:my-20 my-10 ">
        <div className="container-class md:p-4">
          <Totc />
        </div>

        {/* Mission And Vission */}
        <div className="container-class md:p-4 mt-10 lg:mt-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[50%]">
              <img className="rounded-xl" src="https://i.ibb.co.com/VJMKM9s/122864.jpg" alt="" />
            </div>
            <div className="lg:w-[40%] mt-8 lg:mt-0">
              <PrimaryTitle
                headingPart1={"Our"}
                headingPart2={"Mission & Vision"}
                style={""}
              />
              <p className="text-[#696984] mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
              <p className="text-[#696984] mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
              <p className="text-[#696984]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit suscipit, repudiandae similique accusantium eius nulla quam laudantium sequi.</p>
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

        {/* Swiper Slider for Instructors */}
        <div className="my-10 lg:my-20 container-class md:p-4">
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
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
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
