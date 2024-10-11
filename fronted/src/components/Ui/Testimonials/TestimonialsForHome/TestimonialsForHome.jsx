import axios from "axios";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TestimonialsForHome.css'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Rating from "../../Rating";

const TestimonialsForHome = () => {

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
      }, []);

      return (
            <div className="py-8">
                  <h2 className='text-center text-[28px] font-medium mb-10 text-[#2F327D]'>What our happy student <br /> <span className="text-[#00CBB8]">says about us!!</span></h2>
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={40}
                        autoplay={{
                              delay: 3000,
                              disableOnInteraction: true,
                        }}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        breakpoints={{
                              320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                              },
                              640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                              },
                              768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                              },
                              1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                              },
                        }}
                        className="testimonialForHome"
                  >
                        {
                              testimonials?.map(testimonial => (
                                    <SwiperSlide key={testimonial?.id}>

                                          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start md:flex-none">
                                                {/* image */}
                                                <figure>
                                                      <img className="rounded-full" src={testimonial?.profilePic} alt="" />
                                                </figure>
                                                <div className="flex gap-1 justify-start items-center text-[#6E7697] my-4">
                                                      <Rating sty value={testimonial?.rating} />
                                                      <span className="text-sm text-[#969696]">({testimonial?.rating})</span>
                                                </div>
                                                <p className="text-[#696984] mb-5">{testimonial?.testimonial}</p>

                                                <h4 className="text-[#2F327D] text-2xl font-bold font-nunito">{testimonial?.name}</h4>
                                                <span className="text-[#6E7697]">{testimonial?.title}</span>
                                          </div>
                                    </SwiperSlide>
                              ))
                        }

                  </Swiper>

            </div>
      );
};

export default TestimonialsForHome;
