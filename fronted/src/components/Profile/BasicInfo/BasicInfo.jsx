import useUser from "../../../Hooks/api/useUser";

export default function BasicInfo() {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between gap-10 w-full">
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Full Name :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.name}
          </span>
        </div>
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Email :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.email}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-10 w-full">
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Gender :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.gender}
          </span>
        </div>
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Phone</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.phone || "01923720498"}
          </span>
        </div>
      </div>
      <div className="flex justify-between gap-10 w-full">
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Nationality :</span>
          <span className="text-base font-medium text-gray-600">
            {user?.nationality || "Bangladeshi"}
          </span>
        </div>
        <div className="flex gap-10 w-1/2">
          <span className="text-md font-semibold w-[20%]">Address :</span>
          <span className="text-base font-medium text-gray-600 w-1/2">
            {user?.address || "Dhaka, Bangladesh"}
          </span>
        </div>
      </div>
    </div>
  );
}
