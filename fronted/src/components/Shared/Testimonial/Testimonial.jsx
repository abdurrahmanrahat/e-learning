import { GoArrowRight } from "react-icons/go";

const Testimonial = () => {
      return (
            <div className="container mx-auto p-4 lg:p-0 my-10 lg:my-20 flex items-center">
                  <div className="w-full lg:w-1/2 border">
                        <span className="font-nunito text-[#525596] text-xl">----- TESTIMONIAL</span>

                        <h2 className="text-[#2F327D] text-6xl font-bold font-nunito my-5">What They Say?</h2>

                        <p className="text-[#696984] text-2xl font-poppins mb-4">TOTC has got more than 100k positive ratings from our users around the world. </p>

                        <p className="text-[#696984] text-2xl font-poppins mb-4">Some of the students and teachers were greatly helped by the Skilline.</p>

                        <p className="text-[#696984] text-2xl font-poppins mb-4">Are you too? Please give your assessment</p>

                        <div className="flex items-center relative border">
                              <p className="font-poppins text-[#49BBBD] text-xl border border-[#49BBBD] h-12 flex items-center justify-center pl-8 pr-12 w-fit rounded-full z-10">Write your assessment</p>
                              <img className="h-12 z-20 -ml-[35px]" src="https://i.ibb.co.com/Yydfsdv/Group-32.png" alt="" />
                              {/* <span className="text-[#49BBBD] border border-[#49BBBD] h-12 w-12 flex items-center justify-center rounded-full absolute right-[49%]"><GoArrowRight /></span> */}
                        </div>
                  </div>
                  <div className="lg:w-1/2 border">
                        <img className="h-[700px]" src="https://i.ibb.co.com/jwLKXqt/smiling-woman-with-afro-posing-pink-sweater-1.png" alt="" />
                  </div>
            </div>
      );
};

export default Testimonial;