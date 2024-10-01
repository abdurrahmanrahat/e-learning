import { useEffect, useRef, useState } from "react";
import { IoMdCamera } from "react-icons/io";
import AboutInstructor from "./AboutInstructor";
import LinksInstructor from "./LinksInstructor";
import { useUser } from "../../../../Hooks/api/useUser";
import BasicInstInfo from "./BasicInstInfo";

const InstructorsProfile = () => {
  const { user } = useUser();
  //   Instructor profile tabs
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <div className="relative mb-80 lg:mb-40 md:mb-40">
        <img src="https://i.ibb.co.com/5k16J00/header-setting.png" alt="" />
        <div className="absolute lg:top-[75px] lg:left-12 md:top-12">
          <div className="flex flex-col lg:flex-row md:flex-row  items-center  gap-7 lg:mb-16 md:mb-16 ">
            <div className="">
              <div className="relative">
                <img
                  className="rounded-full h-[150px] w-[150px] border-8 border-[#4bc0c0]"
                  src={user?.photoUrl}
                  alt=""
                />
                <div className="bg-[#4bc0c0] p-2 rounded-full absolute end-2 top-28">
                  <IoMdCamera className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="lg:mt-16 md:mt-16">
              <h2 className="text-xl font-bold text-gray-700 mb-1">
                Instructor: {user?.name}
              </h2>
              <p className=" text-gray-500 ">
                Your account is ready, you can now apply for advice.
              </p>
              <h2 className="font-bold text-gray-500 ">Email: {user?.email}</h2>
            </div>
          </div>
        </div>
      </div>
      <>
        {/*<!-- Component: tab --> */}
        <section
          className="max-w-full flex flex-col lg:flex-row gap-y-10 lg:gap-y-0"
          aria-multiselectable="false "
        >
          <div className="w-full lg:w-[25%] ">
            <ul
              className="flex lg:px-5 flex-col  justify-start  border-slate-200"
              role="tablist"
              ref={wrapperRef}
            >
              <li
                className="border rounded mb-4 border-[#4bc0c0] w-[60%] md:w-[30%] lg:w-full"
                role="presentation"
              >
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-start gap-2  whitespace-nowrap  px-6 text-sm font-medium tracking-wide transition duration-300 
                    hover:text-white hover:bg-[#4bc0c0] hover:stroke-[#4bc0c0] focus:bg-[#4bc0c0] focus-visible:outline-none disabled:cursor-not-allowed ${
                      tabSelected.currentTab === 1
                        ? "border-[#4bc0c0] stroke-[#4bc0c0] text-black hover:border-[#4bc0c0]   focus:border-[#4bc0c0] focus:stroke-[#4bc0c0]  focus:text-black  disabled:border-slate-500"
                        : " justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#4bc0c0]hover:text-[#4bc0c0] focus:border-[#4bc0c0] focus:stroke-[#4bc0c0] focus:text-[#4bc0c0] disabled:text-slate-500"
                    }`}
                  id="tab-label-1a"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="1"
                  tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                  aria-controls="tab-panel-1a"
                  aria-selected={`${
                    tabSelected.currentTab === 1 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 1 })
                  }
                >
                  <span className="font-bold text-lg text-gray-600">
                    Basic Information
                  </span>
                </button>
              </li>
              <li
                className="border border-[#4bc0c0] w-[60%] md:w-[30%] lg:w-full"
                role="presentation"
              >
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-start gap-2 whitespace-nowrap  px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-[#4bc0c0] hover:stroke-[#4bc0c0] focus:bg-[#4bc0c0] hover:text-white focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 2
                      ? "border-[#4bc0c0] text-black  stroke-[#4bc0c0]  hover:border-[#4bc0c0]  hover:text-[#4bc0c0] focus:border-[#4bc0c0] focus:stroke-[#4bc0c0] focus:text-[#4bc0c0] disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#4bc0c0] hover:text-[#4bc0c0] focus:border-[#4bc0c0] focus:stroke-[#4bc0c0] focus:text-[#4bc0c0] disabled:text-slate-500"
                  }`}
                  id="tab-label-2a"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="2"
                  tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                  aria-controls="tab-panel-2a"
                  aria-selected={`${
                    tabSelected.currentTab === 2 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 2 })
                  }
                >
                  <span className="font-bold text-lg text-gray-600">About</span>
                </button>
              </li>
              <li
                className="border mt-4 border-[#4bc0c0] w-[60%] md:w-[30%] lg:w-full"
                role="presentation"
              >
                <button
                  className={`-mb-px inline-flex h-12 w-full items-center justify-start gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-[#4bc0c0] hover:stroke-[#4bc0c0] focus:bg-[#4bc0c0] focus-visible:outline-none disabled:cursor-not-allowed ${
                    tabSelected.currentTab === 3
                      ? "border-[#4bc0c0]  stroke-[#4bc0c0] text-black hover:border-[#4bc0c0]   focus:border-[#4bc0c0] focus:stroke-[#4bc0c0] focus:text-[#4bc0c0] disabled:border-slate-500"
                      : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#4bc0c0]  focus:border-[#4bc0c0] focus:stroke-[#4bc0c0] focus:text-[#4bc0c0] disabled:text-slate-500"
                  }`}
                  id="tab-label-3a"
                  role="tab"
                  aria-setsize="3"
                  aria-posinset="2"
                  tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
                  aria-controls="tab-panel-2a"
                  aria-selected={`${
                    tabSelected.currentTab === 3 ? "true" : "false"
                  }`}
                  onClick={() =>
                    setTabSelected({ ...tabSelected, currentTab: 3 })
                  }
                >
                  <span className="font-bold text-lg text-gray-600">Links</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[75%] bg-gray-100 lg:mx-10 rounded-xl">
            <div
              className={`px-6  ${
                tabSelected.currentTab === 1 ? "" : "hidden"
              }`}
              id="tab-panel-1a"
              aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-1a"
              tabindex="-1"
            >
              <BasicInstInfo></BasicInstInfo>
            </div>
            <div
              className={`px-6  ${
                tabSelected.currentTab === 2 ? "" : "hidden"
              }`}
              id="tab-panel-2a"
              aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-2a"
              tabindex="-1"
            >
              <AboutInstructor></AboutInstructor>
            </div>
            <div
              className={`px-6  ${
                tabSelected.currentTab === 3 ? "" : "hidden"
              }`}
              id="tab-panel-3a"
              aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-3a"
              tabindex="-1"
            >
              <LinksInstructor></LinksInstructor>
            </div>
          </div>
        </section>
        {/*<!-- End Basic lg sized tab --> */}
      </>
    </div>
  );
};

export default InstructorsProfile;
