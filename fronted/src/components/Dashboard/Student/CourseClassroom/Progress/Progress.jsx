import ProgressBar from "../../../../Ui/ProgressBar";

export default function Progress({
  watchedVideosCount,
  totalVideosCount,
  courseProgressPercentage,
}) {
  return (
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
  );
}
