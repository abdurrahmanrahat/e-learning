import BasicInfo from "../../../components/Profile/BasicInfo/BasicInfo";
import BioDescription from "../../../components/Profile/BioDescription/BioDescription";
import WebsiteTitle from "../../../components/Ui/WebsiteTitle";
import useUser from "../../../Hooks/api/useUser";
import SocialLinks from "../../../components/Profile/SocialLinks/SocialLinks";
import PrimaryTitle from "../../../components/Ui/PrimaryTitle";
import Button from "../../../components/Ui/Button";
import Modal from "../../../components/Ui/Modal";
import { useState } from "react";
import ProfileForm from "./ProfileForm/ProfileForm";

export default function Profile() {
  const { user } = useUser();
  const [openModal, setOpenModal] = useState(false);

  const handleProfileEdit = (data) => {
    console.log(data);
  };

  return (
    <WebsiteTitle title={"Profile"}>
      <div className="py-10 px-10 flex flex-col gap-10">
        <PrimaryTitle headingPart1={"Profile"} />
        {/* Profile pic */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <figure className="w-32 border-[4px] border-primary rounded-full">
              <img
                className="rounded-full w-full h-full"
                src={user?.photoUrl}
                alt=""
              />
            </figure>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-gray-700">{user?.name}</h2>
              <p className=" text-gray-500 ">{user?.role}</p>
              <h4 className="font-bold text-gray-500 ">{user?.email}</h4>
            </div>
          </div>
          <div className="flex gap-10 justify-start w-[40%] mr-10">
            <Button bgBtn={true} style={"w-full"}>
              Upload New Photo
            </Button>
            <Button outlineBtn={true} style={"w-full"}>
              Delete
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-20 my-10">
          {/* basic info */}
          <BasicInfo />
          {/* Bio description */}
          <BioDescription />
          {/* Social Links */}
          <SocialLinks />
        </div>
        <div
          onClick={() => setOpenModal(true)}
          className="flex justify-end w-full"
        >
          <Button bgBtn={true} style={"w-[10%] rounded-xl"}>
            Edit Info
          </Button>
        </div>
      </div>
      {openModal && (
          <Modal setOpenModal={setOpenModal} openModal={openModal}>
            <ProfileForm handleProfileEdit={handleProfileEdit} />
          </Modal>
      )}
    </WebsiteTitle>
  );
}
