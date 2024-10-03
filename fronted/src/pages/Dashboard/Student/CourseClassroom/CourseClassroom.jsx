import { useParams } from "react-router-dom";
import { useCourses } from "../../../../Hooks/api/useCourses";
import ProgressBar from "../../../../components/Ui/ProgressBar";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import Tabs from "../../../../components/Ui/Tabs";
import { FaLock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const modules = [
  {
    moduleName: "Introduction to Web Development",
    description:
      "This milestone covers the basics of web development, including an introduction to HTML.",
    content: [
      {
        title: "What is Web Development?",
        duration: "10:35",
        contentLink:
          "https://www.youtube.com/embed/UYbN4jhDg6Q?si=XgjHgu6tT_I9SAay",
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
    moduleName: "CSS Fundamentals",
    description:
      "This module introduces CSS, exploring its core concepts for styling web pages.",
    content: [
      {
        title: "What is CSS?",
        duration: "12:50",
        contentLink:
          "https://www.youtube.com/embed/Edsxf_NBFrw?si=y6vXDiDxIC6LXeDv",
      },
      {
        title: "Basic CSS Properties",
        duration: "14:30",
        contentLink:
          "https://www.youtube.com/embed/hJECxP0qlFQ?si=cJDKVZaZUGjhfKvW",
      },
    ],
  },
  {
    moduleName: "JavaScript Basics",
    description:
      "An introduction to JavaScript, including variables, functions, and basic DOM manipulation.",
    content: [
      {
        title: "JavaScript Syntax and Variables",
        duration: "18:15",
        contentLink:
          "https://www.youtube.com/embed/W6NZfCO5SIk?si=RugCyoxLEyG0p9v2",
      },
      {
        title: "Functions in JavaScript",
        duration: "13:45",
        contentLink:
          "https://www.youtube.com/embed/8R7w3jwj4g4?si=ZaF63KvSJ1VPAwRI",
      },
    ],
  },
  {
    moduleName: "Responsive Web Design",
    description:
      "This module teaches how to create websites that work well on different devices.",
    content: [
      {
        title: "Introduction to Responsive Design",
        duration: "16:30",
        contentLink:
          "https://www.youtube.com/embed/srvUrASNj0s?si=U6DtK9C1CmZgJED9",
      },
      {
        title: "Media Queries in CSS",
        duration: "14:40",
        contentLink:
          "https://www.youtube.com/embed/ZBRq03R9D0U?si=ZJEnwWn_jmJQgNMr",
      },
    ],
  },
  {
    moduleName: "Version Control with Git",
    description:
      "Learn about version control using Git, including basic Git commands and repositories.",
    content: [
      {
        title: "What is Version Control?",
        duration: "11:20",
        contentLink:
          "https://www.youtube.com/embed/1ffBJ4sVUb4?si=lxZkt0NOvjHvPYcJ",
      },
      {
        title: "Basic Git Commands",
        duration: "19:00",
        contentLink:
          "https://www.youtube.com/embed/HVsySz-h9r4?si=_PxSw-OBYzfv5UKR",
      },
    ],
  },
  {
    moduleName: "Introduction to Node.js",
    description:
      "This module covers the basics of Node.js and how it can be used for backend development.",
    content: [
      {
        title: "What is Node.js?",
        duration: "12:45",
        contentLink:
          "https://www.youtube.com/embed/TlB_eWDSMt4?si=Uexf4EzfN5gHj_d9",
      },
      {
        title: "Creating a Simple Server with Node.js",
        duration: "17:30",
        contentLink:
          "https://www.youtube.com/embed/jIsj0upCBAM?si=tqBHF-uXMP4YFuGx",
      },
    ],
  },
];

export default function CourseClassroom() {
  const { id } = useParams();
  const { course } = useCourses(null, id);
  const [description, setDescription] = useState(modules[0]?.description);
  const [contents, setContents] = useState(modules[0]?.content[1]);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState({});

  const handleActiveModuleIndex = (index, description) => {
    setActiveModuleIndex(activeModuleIndex === index ? null : index);
    setDescription(description);
  };

  const handleVideoWatch = (moduleIndex, videoIndex, item) => {
    setWatchedVideos((prevWatched) => {
      const key = `module-${moduleIndex}`;
      const currentWatched = prevWatched[key] || [];
      if (!currentWatched.includes(videoIndex)) {
        return {
          ...prevWatched,
          [key]: [...currentWatched, videoIndex],
        };
      }
      return prevWatched;
    });
    setContents(item);
  };

  const getTotalVideosCount = () => {
    return modules.reduce((total, module) => total + module.content.length, 0);
  };

  // Function to calculate number of watched videos
  const getWatchedVideosCount = () => {
    return Object.values(watchedVideos).reduce((total, watchedInModule) => {
      return total + watchedInModule.length;
    }, 0);
  };

  // Calculate the total number of videos
  const totalVideosCount = getTotalVideosCount();

  // Calculate the number of watched videos
  const watchedVideosCount = getWatchedVideosCount();

  // Calculate the overall course progress as a percentage
  const courseProgressPercentage =
    totalVideosCount > 0 ? (watchedVideosCount / totalVideosCount) * 100 : 0;

  const tabsItem = [
    {
      content: <p>{description}</p>,
    },
    {
      content: <p>This is notes</p>,
    },
    {
      content: <p>This is resources</p>,
    },
  ];
  console.log(description);

  return (
    <div className="flex flex-col gap-10 my-6">
      <PrimaryTitle
        headingPart1={`${course?.data?.title} with`}
        headingPart2={`${course?.data?.instructorName}`}
      />
      <div className="flex flex-col gap-2 w-full ">
        <div className="flex gap-2 justify-start items-center border-b-[3px] border-b-[#49BBBD] pb-2">
          <span></span>
          <span className="text-xl font-medium text-primary">
            {contents?.title}
          </span>
        </div>
        <div className="w-full flex justify-center items-start gap-6">
          {/* video */}
          <div className="w-[60%]">
            {/* video content */}
            <div className="p-4 w-full">
              <iframe
                className="w-full h-[350px] rounded-xl"
                src={`${contents?.contentLink}&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* description */}
            <div className="h-[40%] mt-10">
              <Tabs
                tabs={["Description", "Notes", "Resources"]}
                tabItems={tabsItem}
              />
            </div>
          </div>

          {/* module */}
          <div className="w-[40%] flex flex-col gap-4">
            {/* progress bar */}
            <div className="flex justify-start items-center gap-2 text-primary mb-4">
              <span className="">Course Status:</span>
              <div className="w-full flex flex-col gap-2 justify-start ">
                <span className="">
                  <ProgressBar
                    value={`${Math.floor(courseProgressPercentage)}`}
                    width={`${Math.floor(courseProgressPercentage)}`}
                  />
                </span>
                <span>
                  ({watchedVideosCount}/{totalVideosCount})
                </span>
              </div>
            </div>
            {/* search */}
            <div className="bg-[#49BBBD] shadow-myCustomShadow p-6 rounded-xl">
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
            {/* modules */}
            <div className="custom-scrollbar h-[60vh] overflow-y-scroll flex flex-col gap-4">
              <div className="flex flex-col gap-4 py-4 rounded-2xl">
                {modules?.map((item, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className="flex flex-col gap-4 bg-[#49BBBD] p-4 rounded-2xl text-white"
                  >
                    <div
                      onClick={() =>
                        handleActiveModuleIndex(moduleIndex, item.description)
                      }
                      className="flex justify-between gap-4 text-xl cursor-pointer"
                    >
                      <span>{item.moduleName}</span>
                      {activeModuleIndex === moduleIndex ? (
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
                    {activeModuleIndex === moduleIndex && (
                      <ul className="bg-[#2a494967] rounded-xl p-4">
                        {item?.content.map((item, videoIndex) => (
                          <li
                            className="border-b-[2px] border-b-[#9D9B9B] py-4 px-2 cursor-pointer flex gap-4 items-center"
                            key={videoIndex}
                            onClick={() =>
                              handleVideoWatch(moduleIndex, videoIndex, item)
                            }
                          >
                            <div className="flex gap-2 text-xl">
                              {watchedVideos[`module-${moduleIndex}`]?.includes(
                                videoIndex
                              ) ? (
                                <FaCheckCircle />
                              ) : (
                                <FaLock />
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              <span>{item.title}</span>
                              <div className="flex gap-2 items-center text-md">
                                <span>
                                  <FiYoutube />
                                </span>
                                <span>{item.duration}</span>
                              </div>
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
      </div>
    </div>
  );
}
