import useUser from "../../../Hooks/api/useUser";

export default function SocialLinks() {
  const { user } = useUser();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-10 w-full">
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Github :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.sortIntro || "github"}
          </span>
        </div>
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Linkedin :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.sortIntro || "Linkedin"}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-10 w-full">
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Github :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.sortIntro || "github"}
          </span>
        </div>
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Linkedin :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.sortIntro || "Linkedin"}
          </span>
        </div>
      </div>
    </div>
  );
}
