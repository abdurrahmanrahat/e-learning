import { IoMdCamera } from "react-icons/io";

import { useEffect, useRef, useState } from "react";
import MyProfile from "./MyProfile";

const StudentProfile = () => {
  //   student profile tabs
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
      <>
        {/*<!-- Component: Basic lg sized tab --> */}
        <section className="max-w-full flex " aria-multiselectable="false ">
          <div className="w-full lg:w-[25%]  ">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-600">
                Student Profile
              </h2>
            </div>
            <div className="flex flex-col  items-center gap-5 ">
              <div className="relative">
                <img
                  className="rounded-full h-[150px] w-[150px] border-8 border-[#4bc0c0]"
                  src="https://i.ibb.co.com/djnH674/download-20-removebg-preview.png"
                  alt=""
                />
                <div className="bg-[#4bc0c0] p-2 rounded-full absolute end-2 top-28">
                  <IoMdCamera className="text-white text-xl" />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-700 mb-1">
                  Setu Akther
                </h2>

                <h2 className="font-bold text-gray-500 mb-2">
                  Email: msetu5763@gmail.com
                </h2>
              </div>
            </div>
            <ul
              className="flex p-5 flex-col  justify-start  border-slate-200"
              role="tablist"
              ref={wrapperRef}
            >
              <li className="border mb-4 border-[#4bc0c0]" role="presentation">
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
                    My Profile
                  </span>
                </button>
              </li>
              <li className="border border-[#4bc0c0]" role="presentation">
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
                  <span className="font-bold text-lg text-gray-600">
                    Basic Information
                  </span>
                </button>
              </li>
              <li className="border mt-4 border-[#4bc0c0]" role="presentation">
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
                  <span className="font-bold text-lg text-gray-600">
                    Social Link
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-[75%] bg-gray-100 mx-10 rounded-xl">
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
              <MyProfile></MyProfile>
            </div>
            <div
              className={`px-6 py-4 ${
                tabSelected.currentTab === 2 ? "" : "hidden"
              }`}
              id="tab-panel-2a"
              aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-2a"
              tabindex="-1"
            >
              <p>
                One must be entirely sensitive to the structure of the material
                that one is handling. One must yield to it in tiny details of
                execution, perhaps the handling of the surface or grain, and one
                must master it as a whole.
              </p>
            </div>
            <div
              className={`px-6 py-4 ${
                tabSelected.currentTab === 3 ? "" : "hidden"
              }`}
              id="tab-panel-3a"
              aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-3a"
              tabindex="-1"
            >
              <p>
                Even though there is no certainty that the expected results of
                our work will manifest, we have to remain committed to our work
                and duties; because, even if the results are slated to arrive,
                they cannot do so without the performance of work.
              </p>
            </div>
          </div>
        </section>
        {/*<!-- End Basic lg sized tab --> */}
      </>
    </div>
  );
};

export default StudentProfile;
