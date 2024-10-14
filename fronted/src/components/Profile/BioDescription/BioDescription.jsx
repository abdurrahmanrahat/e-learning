import useUser from "../../../Hooks/api/useUser";

export default function BioDescription() {
  const { user } = useUser();
  const intro = 'Update your intro description';
  const About = 'Update your bio Description';
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10 w-full">
        <span className="text-md font-semibold w-[11%] uppercase">Intro :</span>
        <span className="text-base font-medium text-gray-600 w-full text-justify">
          {user?.sortIntro || intro}
        </span>
      </div>
      <div className="flex gap-10 w-full">
        <span className="text-md font-semibold w-[11%] uppercase">About :</span>
        <span className="text-base font-medium text-gray-600 w-full text-justify">
          {user?.sortIntro || About}
        </span>
      </div>
    </div>
  );
}
