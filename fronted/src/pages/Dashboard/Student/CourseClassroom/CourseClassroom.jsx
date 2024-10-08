import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Progress from "../../../../components/Dashboard/Student/CourseClassroom/Progress/Progress";
import Search from "./Search/Search";
import Modules from "./Modules/Modules";
import VideoIframe from "./VideoIframe/VideoIframe";
import useCourseModules from "../../../../Hooks/api/useCourseModules";
import { useParams } from "react-router-dom";

const modules = [
  {
    moduleName: "Introduction to Web Development",
    description:
      "This milestone covers the basics of web development, including an introduction to HTML.",
    content: [
      {
        title: "What is Web Development?",
        duration: "10:35",
        contentLink: "https://www.youtube.com/watch?v=UYbN4jhDg6Q",
      },
      {
        title: "Getting Started with HTML",
        duration: "15:20",
        contentLink: "https://www.youtube.com/watch?v=Gu6k47UjZ44",
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
        contentLink: "https://www.youtube.com/watch?v=Edsxf_NBFrw",
      },
      {
        title: "Basic CSS Properties",
        duration: "14:30",
        contentLink: "https://www.youtube.com/watch?v=hJECxP0qlFQ",
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
        contentLink: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
      {
        title: "Functions in JavaScript",
        duration: "13:45",
        contentLink: "https://www.youtube.com/watch?v=8R7w3jwj4g4",
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
        contentLink: "https://www.youtube.com/watch?v=srvUrASNj0s",
      },
      {
        title: "Media Queries in CSS",
        duration: "14:40",
        contentLink: "https://www.youtube.com/watch?v=ZBRq03R9D0U",
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
        contentLink: "https://www.youtube.com/watch?v=1ffBJ4sVUb4",
      },
      {
        title: "Basic Git Commands",
        duration: "19:00",
        contentLink: "https://www.youtube.com/watch?v=HVsySz-h9r4",
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
        contentLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
      },
      {
        title: "Creating a Simple Server with Node.js",
        duration: "17:30",
        contentLink: "https://www.youtube.com/watch?v=jIsj0upCBAM",
      },
    ],
  },
];


export default function CourseClassroom() {
  const {id} = useParams();
  const {courseModules} = useCourseModules(id);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState(courseModules[0]);
  const [content, setContent] = useState(courseModules[0]?.content[0]);

  const handleActiveModuleIndex = (moduleIndex, item) => {
    setActiveModuleIndex(
      activeModuleIndex === moduleIndex ? null : moduleIndex
    );
    setAdditionalInfo({
      description: item?.description,
      notes: item?.notes,
      resources: item?.resources
    });
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
    setContent(item);
    setActiveVideoIndex(activeVideoIndex === videoIndex ? null : videoIndex);
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

  console.log(courseModules[0]?.content[0]);

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col lg:flex-row xl:flex-row gap-4 justify-between items-center px-4 py-6 text-xl font-medium text-white bg-primary border-b-[0.6px] border-b-[#D1D7DC]">
        {/* title */}
        <div className="w-full flex gap-4 justify-center lg:justify-start xl:justify-start items-center">
          <span className="cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-500 ease-in-out">
            <FaCircleArrowLeft />
          </span>
          <span>{content?.title}</span>
        </div>
        {/* progress bar */}
        <Progress
          watchedVideosCount={watchedVideosCount}
          totalVideosCount={totalVideosCount}
          courseProgressPercentage={courseProgressPercentage}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row xl:flex-row justify-center items-start">
        {/* video */}
        <VideoIframe additionalInfo={additionalInfo} content={content} />

        <div className="w-full lg:w-[35%] xl:w-[35%] flex flex-col gap-4">
          {/* search */}
          <Search />

          {/* modules */}
          <Modules
            handleActiveModuleIndex={handleActiveModuleIndex}
            activeModuleIndex={activeModuleIndex}
            handleVideoWatch={handleVideoWatch}
            watchedVideos={watchedVideos}
            modules={courseModules}
            activeVideoIndex={activeVideoIndex}
          />
        </div>
      </div>
    </div>
  );
}
