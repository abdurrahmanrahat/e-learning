export default function PrimaryTitle({
  headingPart1,
  headingPart2,
  subtext,
  style,
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className={`text-[28px] font-medium ${style}`}>
        <span className="text-[#2F327D]">{headingPart1}</span>{" "}
        <span className="text-[#00CBB8]">{headingPart2}</span>
      </h2>
      <p className={`text-myGray text-lg ${style}`}>{subtext}</p>
    </div>
  );
}
