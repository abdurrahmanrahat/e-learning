import { FaCircleArrowLeft } from "react-icons/fa6";
import Search from "./Search/Search";
import VideoIframe from "./VideoIframe/VideoIframe";
import useCourseModules from "../../../../Hooks/api/useCourseModules";
import { useParams } from "react-router-dom";
import useEnrolledCourseById from "../../../../Hooks/api/useEnrolledCourseById";
import { useEffect, useState } from "react";
import Modules from "./Modules/Modules";
import Progress from "../../../../components/Dashboard/Student/CourseClassroom/Progress/Progress";
import useAxios from "../../../../Hooks/useAxios";

export default function CourseClassroom() {
  const { courseId, enrolledCourseId } = useParams();
  const { enrolledCourse } = useEnrolledCourseById(enrolledCourseId);
  const { courseModules } = useCourseModules(courseId);
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [courseProgress, setCourseProgress] = useState(0);
  const apiHandler = useAxios();

  // handleActiveModuleIndex
  const handleActiveModuleIndex = (moduleIndex) => {
    setActiveModuleIndex(moduleIndex);
  };
  // handle videoIndex
  const handleVideoIndex = (videoIndex) => {
    setActiveVideoIndex(videoIndex);
    const saveProgress = async () => {
      await apiHandler
        .patch(`/enrolled-courses/${enrolledCourseId}`, {
          moduleIndex: activeModuleIndex,
          videoIndex: activeVideoIndex,
          percentage: courseProgress,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    saveProgress();
  };

  // total videos
  const totalVideos = courseModules.reduce((total, module) => {
    return total + module?.content?.length;
  }, 0);

  // completed total videos number
  const calculateTotalCompletedVideos = () => {
    let totalCompletedVideos = 0;

    // If either index is null, return 0 immediately
    if (activeModuleIndex === null || activeVideoIndex === null) {
      return totalCompletedVideos; // returns 0
    }

    // 1. Sum the total videos of all previous modules
    for (let i = 0; i < activeModuleIndex; i++) {
      totalCompletedVideos += courseModules[i].videos.length;
    }

    // 2. Add the completed videos in the current module up to the given videoIndex
    totalCompletedVideos += activeVideoIndex + 1; // Include completed videos up to current

    return totalCompletedVideos;
  };

  // calculate percentage
  const calculateCompletionPercentage = (totalCompletedVideos, totalVideos) => {
    const percentage = Math.round((totalCompletedVideos / totalVideos) * 100);

    return Math.min(percentage, 100);
  };

  const totalCompletedVideos = calculateTotalCompletedVideos();

  useEffect(() => {
    const newPercentage = calculateCompletionPercentage(
      totalCompletedVideos,
      totalVideos
    );
    setCourseProgress(newPercentage);
  }, [totalCompletedVideos, totalVideos]);

  console.log(courseProgress);

  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col lg:flex-row xl:flex-row gap-4 justify-between items-center px-4 py-6 text-xl font-medium text-white bg-primary border-b-[0.6px] border-b-[#D1D7DC]">
        {/* title */}
        <div className="w-full flex gap-4 justify-center lg:justify-start xl:justify-start items-center">
          <span className="cursor-pointer text-2xl hover:scale-[1.2] transition-all duration-500 ease-in-out">
            <FaCircleArrowLeft />
          </span>
          {/* <span>{content?.title}</span> */}
        </div>
        {/* progress bar */}
        <Progress
          totalVideos={totalVideos}
          completedVideos={totalCompletedVideos}
          completionPercentage={courseProgress}
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row xl:flex-row justify-center items-start">
        {/* video */}
        <VideoIframe additionalInfo={"pending"} content={"pending"} />

        <div className="w-full lg:w-[35%] xl:w-[35%] flex flex-col gap-4">
          {/* search */}
          <Search />

          {/* modules */}
          <Modules
            modules={courseModules}
            handleActiveModuleIndex={handleActiveModuleIndex}
            activeModuleIndex={activeModuleIndex}
            activeVideoIndex={activeVideoIndex}
            handleVideoIndex={handleVideoIndex}
          />
        </div>
      </div>
    </div>
  );
}
