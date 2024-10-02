import { useParams } from "react-router-dom";
import { useCourses } from "../../../../Hooks/api/useCourses";
import ProgressBar from "../../../../components/Ui/ProgressBar";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const modules = [
  {
    milestoneName: "Milestone 1: Getting Started",
    moduleName: "Introduction to Web Development",
    content: [
      {
        title: "What is Web Development?",
        duration: "10:35",
        contentLink: "https://www.youtube.com/embed/UYbN4jhDg6Q?si=XgjHgu6tT_I9SAay",
      },
      {
        title: "Getting Started with HTML",
        duration: "15:20",
        contentLink:
          "https://www.youtube.com/embed/Gu6k47UjZ44?si=IwqbhceFsUUArXRQ",
      },
    ],
  },
  {
    milestoneName: "Milestone 2: Styling the Web", 
    moduleName: "CSS Fundamentals",
    content: [
      {
        title: "Introduction to CSS",
        duration: "12:45",
        contentLink: "https://example.com/video3",
      },
      {
        title: "CSS Selectors and Properties",
        duration: "18:30",
        contentLink: "https://example.com/video4",
      },
    ],
  },
  {
    milestoneName: "Milestone 3: Programming the Web", 
    moduleName: "JavaScript Basics",
    content: [
      {
        title: "JavaScript Syntax and Variables",
        duration: "20:15",
        contentLink: "https://example.com/video5",
      },
      {
        title: "Functions and Events",
        duration: "22:50",
        contentLink: "https://example.com/video6",
      },
    ],
  },
];

export default function CourseClassroom() {
  const { id } = useParams();
  const { course } = useCourses(null, id);
  const [videoLink, setVideoLink] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinksMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log(videoLink);

  return (
    <div className="w-full flex justify-center items-start gap-6 my-10">
      {/* video */}
      <div className="w-[60%]">
        {/* video content */}
        <div className="p-4 w-full">
          <iframe
            className="w-full h-[350px] rounded-xl"
            src={videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* description */}
        <div className="h-[40%]">
          <span>This is Description</span>
        </div>
      </div>

      {/* module */}
      <div className="w-[40%] flex flex-col gap-4">
        <div className="flex gap-6 text-primary mb-4">
          <span className="w-[30%]">Running Module:</span>
          <span className="w-[70%]">
            <ProgressBar value={80} />
          </span>
        </div>
        <div className="bg-[#49BBBD] shadow-myCustomShadow p-6 rounded-2xl">
          <div className="w-full rounded-xl focus:outline-none focus:border-[#49BBBD] border text-[#000] flex items-center bg-white shadow-myCustomShadow">
            <div className="text-[#9D9B9B] cursor-pointer text-2xl w-[10%] flex justify-center">
              <span>
                <FaSearch />
              </span>
            </div>
            <input
              type="text"
              name="searchKeyword"
              id="searchKeyword"
              placeholder="Search your favorite course"
              className="w-[90%] py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-r-xl"
              //   onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="bg-[#49BBBD] shadow-myCustomShadow p-6 rounded-2xl">
          <h2 className="text-2xl">{course?.data.title}</h2>
          <div className="flex flex-col gap-4 py-4 rounded-2xl">
            {modules?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-[#2a494967] p-4 rounded-2xl text-white"
              >
                <div
                  onClick={() => handleLinksMenu(index)}
                  className="flex justify-between gap-4 text-xl cursor-pointer"
                >
                  <span>{item.moduleName}</span>
                  {activeIndex === index ? (
                    <span className="cursor-pointer">
                      <FaAngleUp />
                    </span>
                  ) : (
                    <span className="cursor-pointer">
                      <FaAngleDown />
                    </span>
                  )}
                </div>
                <span>1h. 30m. 10/1</span>
                {activeIndex === index && (
                  <ul>
                    {item?.content.map((item, index) => (
                      <li
                        className="border-t-[2px] border-t-[#9D9B9B] py-4 px-2 cursor-pointer flex flex-col gap-2"
                        key={index}
                        onClick={() => setVideoLink(item.contentLink)}
                      >
                        <span>{item.title}</span>
                        <div className="flex gap-2 items-center text-md">
                          <span>
                            <FiYoutube />
                          </span>
                          <span>{item.duration}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
