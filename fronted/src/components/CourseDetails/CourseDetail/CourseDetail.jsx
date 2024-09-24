import { useLoaderData, useParams, Link } from "react-router-dom";
import { HOMEImages } from "../../../image-data/home";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import PageBanner from "../../Ui/PageBanner";
import Tabs from "../../Ui/Tabs";
import OverviewTabs from "../OverviewTabs/OverviewTabs";
import ReviewTabs from "../ReviewTabs/ReviewTabs";
import DescriptionTabs from "../DescriptionTabs/DescriptionTabs";

const CourseDetail = () => {
  const courses = useLoaderData();
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));
  console.log(course);

  const tabs = ["Overview", "Reviews", "Description"];
  const tabsItem = [
    {
      content: <OverviewTabs />,
    },
    {
      content: <ReviewTabs />,
    },
    {
      content: <DescriptionTabs />,
    },
  ];

  return (
    <div className="">
      <PageBanner image={course.thumbnail}>
        <div className="hidden lg:flex xl:flex justify-end items-end lg:w-[1240px] xl:w-[1240px] h-full">
          <img
            className="w-[330px] border-[16px] h-[220px] rounded-2xl"
            src={course.thumbnail}
            alt=""
          />
        </div>
        <h2 className="text-5xl lg:hidden xl:hidden flex justify-center items-center">
          Course Details
        </h2>
      </PageBanner>

      {/* course details */}
      <div className="container-class py-20 px-10">
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between gap-20">
          {/* left-side */}
          <div className="w-full lg:w-[70%] xl:w-[70%]">
            <Tabs tabs={tabs} tabItems={tabsItem} />
          </div>
          {/* right-side */}
          <div className="w-full lg:w-[30%]">
            <div className="mb-10">
              <div className=""></div>
              <h2
                className="text-[#49BBBD] font-bold my-8
"
              >
                11 hour left at this price
              </h2>
              <Link to={`/checkout/${course.id}`}>
                <button className="text-xl font-bold text-center text-white bg-[#49BBBD] w-full lg:w-full md:w-[50%] rounded-xl py-3 hover:bg-emerald-600 ">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="mb-10 mt-10">
              <img
                className="mb-10 w-full"
                src="https://i.ibb.co.com/bBQYCWx/Line-18.png"
                alt=""
              />
              <div className="my-5">
                <h2 className="text-2xl font-bold">This Course included</h2>
                <div className="mt-5">
                  <p className="flex items-center gap-3 font-bold text-gray-500">
                    <img src="https://i.ibb.co.com/8j83dgp/image.png" alt="" />{" "}
                    Money Back Guarantee
                  </p>
                  <p className="flex items-center gap-3 font-bold text-gray-500 my-3">
                    <img src="https://i.ibb.co.com/DpZyzNr/image.png" alt="" />
                    Access on all devices
                  </p>
                  <p className="flex items-center gap-3 font-bold text-gray-500">
                    <img src="https://i.ibb.co.com/h2thvFS/image.png" alt="" />{" "}
                    Certification of completion
                  </p>
                  <p className="flex items-center gap-3 font-bold text-gray-500 mt-3">
                    <img src="https://i.ibb.co.com/d2SCpgC/image.png" alt="" />
                    32 Moduls
                  </p>
                </div>
              </div>
              <img
                className="mt-10 w-full"
                src="https://i.ibb.co.com/bBQYCWx/Line-18.png"
                alt=""
              />
            </div>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-5">
                Training 5 or more people
              </h2>
              <p className="text-gray-500 font-semibold mb-5">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
              <img
                className="mt-10 w-full"
                src="https://i.ibb.co.com/bBQYCWx/Line-18.png"
                alt=""
              />
            </div>
            <div className="mb-7">
              <h2 className="text-2xl font-bold mb-8">
                Training 5 or more people
              </h2>
              <div className="flex items-center gap-6">
                <a href="">
                  <img src="https://i.ibb.co.com/3SJpjyn/facebook.png" alt="" />
                </a>
                <a href="">
                  <img
                    src="https://i.ibb.co.com/0rx87WR/instagram.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img src="https://i.ibb.co.com/Vpgm5Bt/youtube.png" alt="" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co.com/N9bFHw4/telegram.png" alt="" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co.com/4dWH9XS/whatsapp.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-16">
          <div className="w-full lg:w-1/2">
            <PrimaryTitle
              headingPart1={"Everything you can do in a physical classroom,"}
              headingPart2={" you can do with TOTC"}
              style={"text-start"}
              subtext={
                "TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
              }
            />
          </div>
          <div className="relative w-full lg:w-1/2 p-4">
            <div className="absolute top-0 left-0 h-[100px] w-[100px] bg-[#23BDEE] rounded-xl z-[-1]"></div>
            <div className="absolute bottom-0 right-0 h-[150px] w-[150px] bg-[#33EFA0] rounded-xl z-[-1]"></div>
            <figure>
              <img className="w-full" src={HOMEImages.totc_3} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
