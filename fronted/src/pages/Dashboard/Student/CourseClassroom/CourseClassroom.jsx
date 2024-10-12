import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Progress from "../../../../components/Dashboard/Student/CourseClassroom/Progress/Progress";
import Search from "./Search/Search";
import Modules from "./Modules/Modules";
import VideoIframe from "./VideoIframe/VideoIframe";
import useCourseModules from "../../../../Hooks/api/useCourseModules";
import { useParams } from "react-router-dom";
import useEnrolledCourseById from "../../../../Hooks/api/useEnrolledCourseById";

export default function CourseClassroom() {
  const {courseId, enrolledCourseId} = useParams();
  const {enrolledCourse} = useEnrolledCourseById(enrolledCourseId);
  const {courseModules} = useCourseModules(courseId);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState(courseModules[0]);
  const [content, setContent] = useState(courseModules[0]?.content[0]);

  console.log(enrolledCourse)

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
    return courseModules.reduce((total, module) => total + module.content.length, 0);
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

  // console.log(courseModules[0]?.content[0]);

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
