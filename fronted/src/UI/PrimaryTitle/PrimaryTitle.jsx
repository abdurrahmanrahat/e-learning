

export default function PrimaryTitle({ headingPart1, headingPart2, subtext }) {
  
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl">
        <span className="text-[#2F327D]">{headingPart1}</span>
        <span className="text-[#00CBB8]">{headingPart2}</span>
      </h2>
      <p className="text-[#696984] text-lg text-center">{subtext}</p>
    </div>
  );
}
