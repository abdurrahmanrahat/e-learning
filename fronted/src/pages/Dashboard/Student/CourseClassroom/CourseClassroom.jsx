import { useParams } from "react-router-dom";
import { useCourses } from "../../../../Hooks/api/useCourses";
import ProgressBar from "../../../../components/Ui/ProgressBar";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Tabs from "../../../../components/Ui/Tabs";
import { FaLock } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Button from "../../../../components/Ui/Button";

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

  const handleActiveModuleIndex = (moduleIndex, videoIndex, description) => {
    setActiveModuleIndex(
      activeModuleIndex === moduleIndex ? null : moduleIndex
    );
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
    setActiveModuleIndex(activeModuleIndex === videoIndex ? null : videoIndex);
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
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col lg:flex-row xl:flex-row gap-4 justify-between items-center px-4 py-6 text-xl font-medium text-white bg-primary border-b-[0.6px] border-b-[#D1D7DC]">
        <div className="w-full flex gap-4 justify-center lg:justify-start xl:justify-start items-center">
          <span className="cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-500 ease-in-out">
            <FaCircleArrowLeft />
          </span>
          <span>{contents?.title}</span>
        </div>
        {/* progress bar */}
        <div className="w-full flex flex-col justify-end lg:flex-row xl:flex-row items-center gap-2 text-[#fff]">
          <div className="flex gap-2">
            <span className="">Module :</span>
            <span>
              ({watchedVideosCount}/{totalVideosCount})
            </span>
          </div>
          <span className="w-[60%]">
            <ProgressBar
              value={`${Math.floor(courseProgressPercentage)}`}
              width={`${Math.floor(courseProgressPercentage)}`}
            />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row xl:flex-row justify-center items-start">
        {/* video */}
        <div className="w-full lg:w-[65%] xl:w-[65%] border-r-[2px] border-r-[#D1D7DC]">
          {/* video content */}
          <div className="w-full h-[40vh] lg:h-[70vh] xl:h-[70vh] flex flex-col items-end gap-4">
            <iframe
              className="w-full h-full"
              src={`${contents?.contentLink}&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div className="w-full lg:w-[40%] xl:w-[40%] flex gap-12 items-center px-4">
              <Button outlineBtn>Previous</Button>
              <Button bgBtn>Next</Button>
            </div>
          </div>
          {/* description */}
          <div className="h-[40%] mt-10 px-4 hidden flex:flex xl:flex">
            <Tabs
              tabs={["Description", "Notes", "Resources"]}
              tabItems={tabsItem}
            />
          </div>
          <div className="h-[40%] mt-10 px-4 flex flex:hidden xl:hidden">
            <Tabs
              tabs={["Description", "Notes", "Resources"]}
              tabItems={tabsItem}
            />
          </div>
        </div>

        {/* module */}
        <div className="w-full lg:w-[35%] xl:w-[35%] flex flex-col gap-4">
          {/* search */}
          <div className="bg-primary shadow-myCustomShadow p-6">
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
          <div className="custom-scrollbar h-[80vh] overflow-y-scroll flex flex-col gap-4">
            <div className="flex flex-col py-4 rounded-2xl">
              {modules?.map((item, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="flex flex-col bg-[#FFF] rounded-2xl text-[#2d2421]"
                >
                  <div
                    onClick={() =>
                      handleActiveModuleIndex(moduleIndex, item.description)
                    }
                    className={`flex flex-col gap-1 justify-start text-xl font-medium cursor-pointer border-b-[2px] border-b-[#D1D7DC] p-4 hove:bg-[#F7F9FA] ${
                      activeModuleIndex === moduleIndex ? "bg-[#F7F9FA]" : ""
                    }`}
                  >
                    <div className="flex justify-between gap-4">
                      <span>{item.moduleName}</span>
                      {activeModuleIndex === moduleIndex ? (
                        <span className="text-2xl">
                          <FaAngleUp />
                        </span>
                      ) : (
                        <span className="text-2xl">
                          <FaAngleDown />
                        </span>
                      )}
                    </div>
                    <span className="text-base font-normal">1h. 30m. 10/1</span>
                  </div>
                  {activeModuleIndex === moduleIndex && (
                    <ul className="bg-[#fff] text-[#2d2f31]">
                      {item?.content.map((item, videoIndex) => (
                        <li
                          className={`py-4 px-4 cursor-pointer flex gap-4 items-center hover:bg-[#D1D7DC] transition-all duration-300 ease-in-out ${
                            activeModuleIndex === videoIndex
                              ? "bg-[#D1D7DC]"
                              : ""
                          }`}
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
                          <div className="flex flex-col gap-2 text-lg">
                            <span>{item.title}</span>
                            <div className="flex gap-2 items-center text-sm">
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
  );
}
