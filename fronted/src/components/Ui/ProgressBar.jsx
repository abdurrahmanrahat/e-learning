export default function ProgressBar({value}) {
  return (
    <div className="w-full flex justify-between gap-4 items-center">
      <div
        className={`w-[90%] bg-gray-300 rounded-full h-3 flex justify-between`}
      >
        <div
          className={`bg-[#49BBBD] rounded-full h-3 text-white flex items-center justify-center`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div className="w-[10%]">{value}%</div>
    </div>
  );
}
