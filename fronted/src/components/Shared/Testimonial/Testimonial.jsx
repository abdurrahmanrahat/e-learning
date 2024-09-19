import { GoArrowRight } from "react-icons/go";

const Testimonial = () => {
      return (
            <div className="max-w-[1300px] mx-auto p-4 lg:p-0 my-10 lg:my-20 flex flex-col lg:flex-row gap-10">
                  <div className="w-full lg:w-1/2">
                        <span className="font-nunito text-[#525596] text-xl">----- TESTIMONIAL</span>

                        <h2 className="text-[#2F327D] text-6xl font-bold font-nunito my-8">What They Say?</h2>

                        <div className="space-y-6 mb-8">
                              <p className="text-[#696984] text-2xl font-poppins">TOTC has got more than 100k positive ratings from our users around the world. </p>

                              <p className="text-[#696984] text-2xl font-poppins">Some of the students and teachers were greatly helped by the Skilline.</p>

                              <p className="text-[#696984] text-2xl font-poppins">Are you too? Please give your assessment</p>
                        </div>

                        <div className="flex items-center relative">
                              <p className="font-poppins text-[#49BBBD] text-xl border border-[#49BBBD] h-12 flex items-center justify-center pl-8 pr-12 w-fit rounded-full">Write your assessment</p>

                              <img className="h-12 border rounded-full -ml-[42px] bg-white" src="https://i.ibb.co.com/Yydfsdv/Group-32.png" alt="" />
                              {/* <span className="text-[#49BBBD] border border-[#49BBBD] h-12 w-12 flex items-center justify-center rounded-full absolute right-[49%]"><GoArrowRight /></span> */}
                        </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                        <figure className="lg:h-[600px] lg:w-[500px]">
                              <img className="w-full h-full rounded-xl object-cover" src="https://i.ibb.co.com/jwLKXqt/smiling-woman-with-afro-posing-pink-sweater-1.png" alt="" />
                        </figure>

                        {/* card over image */}
                        <div className="px-10 py-6 lg:w-[500px] border-l-[14px] border-[#F67766] rounded-2xl lg:absolute left-20 -bottom-20 bg-white shadow-xl">
                              <p className="font-nunito text-xl text-[#5F5F7E] mb-5 border-l border-[#BDBDD1] pl-6">Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.</p>

                              <div className="flex items-center justify-between pl-6">
                                    <span className="text-[#5F5F7E] text-2xl font-semibold font-nunito">Gloria Rose</span>
                                    <div className="">
                                          <img src="https://i.ibb.co.com/XZLY7V7/Group-29.png" alt="" />
                                          <span className="text-[#80819A] text-lg font-nunito font-semibold mt-4">12 reviews at Yelp</span>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Testimonial;