import { useEffect, useState } from "react";
import Totc from "../../components/Home/Totc/Totc";
import axios from 'axios';
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

const About = () => {

  const [popularCourses, setPopularCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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

    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/testimonials.json');
        setTestimonials(response?.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
    fetchInstructors();
    fetchTestimonials();
  }, []);

  return (
    <div>
      <div className="bg-[#49bbbd] text-[#2F327D] py-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold font-nunito mb-4">About Us</h1>
        <p className="font-roboto font-medium text-lg">Home । About</p>
      </div>

      <div className="lg:my-20 my-10 container-class md:p-4">
        <div>
          <Totc />
        </div>

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

        {/* Testimonials */}
        <div>
          <PrimaryTitle
            headingPart1={"Student Says"}
            headingPart2={"About Us"}
            style={"text-center lg:w-[60%] mx-auto"}
            subtext={'Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country'}
          />
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-[rgb(35,189,238)] w-16 h-16 dark:text-violet-600">
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="px-6 py-2 text-2xl text-[#2F327D] font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>
              <div className="flex justify-center space-x-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500" />
                <div>
                  <p className="leading-tight text-[#2F327D] font-medium">Leroy Jenkins</p>
                  <p className="text-sm leading-tight text-[#6E7697] dark:text-gray-700">Founder, Company</p>
                  <a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600 text-[#33EFA0]" href="/">
                    <span className="">Read full story</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Mission And Vission */}
        <div>
          <div className="flex flex-col lg:flex-row mt-20 justify-between">
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

      </div>
    </div>
  );
};

export default About;
