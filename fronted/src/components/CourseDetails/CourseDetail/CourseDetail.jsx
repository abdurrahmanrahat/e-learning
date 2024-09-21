import { useLoaderData, useParams } from "react-router-dom";
import TabsLgBasic from "../TabsLgBasic/TabsLgBasic";

const CourseDetail = () => {
  const courses = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const course = courses.find((course) => course._id === idInt);
  console.log(course);
  
  return (
    <div className="mb-20">
      {/* course details banner section  */}
      <div className="relative">
        <img className="w-full h-[630px]" src={course.image} alt="" />
        <div className="absolute  end-10 md:end-24 lg:end-36 bottom-0">
          <img
            className="w-[330px] border-[16px] h-[220px] rounded-2xl"
            src={course.image}
            alt=""
          />
        </div>
      </div>
      {/* course details */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28 lg:mx-32 mx-5">
        {/* course details lest section  */}
        <div className="w-full lg:w-[70%]  pt-20">
            <TabsLgBasic></TabsLgBasic>
        </div>
        {/* course details right section  */}
        <div className="w-full lg:w-[30%]  px-5">
          {/* price and offer course  */}
          <div className="mb-10">
            <div className=""></div>
            <h2
              className="text-[#49BBBD] font-bold my-8
"
            >
              11 hour left at this price
            </h2>
            <button className="text-xl font-bold text-center text-white bg-[#49BBBD] w-full lg:w-full md:w-[50%] rounded-xl py-3">
              Buy Now
            </button>
          </div>
          <div className="mb-10 mt-10">
            <img className="mb-10 w-full" src="https://i.ibb.co.com/bBQYCWx/Line-18.png" alt="" />
<div className="my-5">
    <h2 className="text-2xl font-bold">This Course included</h2>
    <div className="mt-5">
        <p className="flex items-center gap-3 font-bold text-gray-500"><img src="https://i.ibb.co.com/8j83dgp/image.png" alt="" /> Money Back Guarantee</p>
        <p className="flex items-center gap-3 font-bold text-gray-500 my-3"><img src="https://i.ibb.co.com/DpZyzNr/image.png" alt="" />Access on all devices</p>
        <p className="flex items-center gap-3 font-bold text-gray-500"><img src="https://i.ibb.co.com/h2thvFS/image.png" alt="" /> Certification of completion</p>
        <p className="flex items-center gap-3 font-bold text-gray-500 mt-3"><img src="https://i.ibb.co.com/d2SCpgC/image.png" alt="" />32 Moduls</p>
    </div>
</div>
            <img className="mt-10 w-full" src="https://i.ibb.co.com/bBQYCWx/Line-18.png" alt="" />

          </div>
          <div className="mb-16">
          <h2 className="text-2xl font-bold mb-5">Training 5 or more people</h2>
          <p className="text-gray-500 font-semibold mb-5">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
          <img className="mt-10 w-full" src="https://i.ibb.co.com/bBQYCWx/Line-18.png" alt="" />
          </div>
          <div className="mb-7">
          <h2 className="text-2xl font-bold mb-8">Training 5 or more people</h2>
          <div className="flex items-center gap-6">
            <a href=""><img src="https://i.ibb.co.com/3SJpjyn/facebook.png" alt="" /></a>
            <a href=""><img src="https://i.ibb.co.com/0rx87WR/instagram.png" alt="" /></a>
            <a href=""><img src="https://i.ibb.co.com/Vpgm5Bt/youtube.png" alt="" /></a>
            <a href=""><img src="https://i.ibb.co.com/N9bFHw4/telegram.png" alt="" /></a>
            <a href=""><img src="https://i.ibb.co.com/4dWH9XS/whatsapp.png" alt="" /></a>

          </div>
          </div>
        </div>
      </div>
{/* Everything you can do in a physical classroom, you can do with TOTC */}
      <div className="lg:mx-32 mx-5 lg:mt-20 md:mt-10 mt-7 ">
      <div className="flex flex-col lg:flex-row  gap-5 ">
      <div className="w-full lg:w-[50%]  items-center">
        <div className="mr-12 lg:py-20 md:py-20 py-10">
          <h2 className="text-4xl font-bold text-gray-600">Everything you can do in a physical classroom, <span className="text-[#33EFA0]
">you can do with TOTC</span></h2>
          <p className="text-gray-500 my-10 text-xl">TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
          <button className="text-xl underline font-semibold text-gray-400">Learn more</button>
        </div>
      </div>
      <div className="w-full lg:w-[50%]  relative">
        <div className="">
          <img className="lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] w-[100px] pt-6" src="https://i.ibb.co.com/7KvsnXp/Rectangle-18.png" alt="" />
          <div className="flex justify-end lg:mt-16 md:mt-28 mt-[60px]">
            <img className="lg:w-[200px] lg:h-[200px] md:w-[200px] md:h-[200px] w-[100px]" src="https://i.ibb.co.com/YbmwDHs/Rectangle-17.png" alt="" />
          </div>
        </div>
        <div className="absolute lg:top-10 top-10 lg:left-5 md:left-6 left-5">
        <img className="w-[340px] lg:w-[610px] md:w-[680px] " src="https://i.ibb.co.com/5rQWTGN/Group-17.png" alt="" />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CourseDetail;
