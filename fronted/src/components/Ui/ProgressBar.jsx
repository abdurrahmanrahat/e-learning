export default function ProgressBar({value, width}) {
  return (
    <div className="w-full flex justify-between gap-4 items-center">
      <div
        className={`w-[90%] bg-gray-300 rounded-full h-3 flex justify-between`}
      >
        <div
          className={`bg-[#FFF] rounded-full h-3 text-white flex items-center justify-center`}
          style={{ width: `${width ? width : 0}%` }}
        ></div>
      </div>
      <div className="w-[10%]">{value ? value : 0}%</div>
    </div>
  );
}
