import { FaAngleDown, FaAngleUp, FaCheckCircle, FaLock } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";


export default function Modules({
    handleActiveModuleIndex,
    activeModuleIndex,
    handleVideoWatch,
    watchedVideos,
    modules,
    activeVideoIndex
}) {

    console.log(activeModuleIndex);



  return (
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
                        activeVideoIndex === videoIndex  ? "bg-[#D1D7DC]" : ""
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
  );
}
