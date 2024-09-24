import axios from "axios";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {

      const [testimonials, setTestimonials] = useState([]);

      useEffect(() => {
            const fetchTestimonials = async () => {
                  try {
                        const response = await axios.get('/testimonials.json');
                        setTestimonials(response?.data);
                  } catch (err) {
                        console.log(err.message);
                  }
            };

            fetchTestimonials();
      }, [])

      return (
            <div className="relative py-8 mt-10 lg:mt-20 w-full bg-fixed bg-cover bg-center bg-[url('https://i.ibb.co.com/8K7yhTB/16041.jpg')]">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                              clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiperForTestimonials"
                  >
                        {
                              testimonials?.map(testimonial => <SwiperSlide
                                    key={testimonial?.id}
                              >
                                    <section className="relative z-10 dark:bg-gray-100 dark:text-gray-800">
                                          <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-[rgb(35,189,238)] w-16 h-16 dark:text-violet-600">
                                                      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                                      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                                                </svg>
                                                <p className="px-6 py-2 text-2xl text-white font-semibold text-center font-nunito sm:text-xl md:text-2xl lg:max-w-2xl xl:max-w-5xl">{testimonial?.testimonial}</p>
                                                <div className="flex justify-center space-x-3">
                                                      <img src={testimonial?.profilePic} alt="" className="w-16 h-w-16 bg-center bg-cover rounded-md" />
                                                      <div>
                                                            <p className="leading-tight text-white text-start text-sm font-medium">{testimonial?.name}</p>
                                                            <p className="text-sm leading-tight text-[#6E7697]">{testimonial?.title}</p>
                                                            <a className="flex items-center py-2 space-x-1 text-sm text-[#33EFA0]" href="/">
                                                                  <span className="">Read full story</span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 110-2h11.586l-2.293-2.293a1 1 010-1.414z" clipRule="evenodd"></path>
                                                                  </svg>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              </SwiperSlide>)
                        }

                  </Swiper>

                  {/* Content */}
                  {/* <section className="relative z-10 dark:bg-gray-100 dark:text-gray-800">
                        <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="text-[rgb(35,189,238)] w-16 h-16 dark:text-violet-600">
                                    <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                    <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                              </svg>
                              <p className="px-6 py-2 text-2xl text-white font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>
                              <div className="flex justify-center space-x-3">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md" />
                                    <div>
                                          <p className="leading-tight text-white font-medium">Leroy Jenkins</p>
                                          <p className="text-sm leading-tight text-[#6E7697]">Founder, Company</p>
                                          <a className="flex items-center py-2 space-x-1 text-sm text-[#33EFA0]" href="/">
                                                <span className="">Read full story</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 110-2h11.586l-2.293-2.293a1 1 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </section> */}
            </div>
      );
};

export default Testimonials;