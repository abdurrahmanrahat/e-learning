import React, { useState, useRef, useEffect } from "react";
import OverviewTabs from "../OverviewTabs/OverviewTabs";
import ReviewTabs from "../ReviewTabs/ReviewTabs";
import DescriptionTabs from "../DescriptionTabs/DescriptionTabs";


export default function TabsLgBasic() {
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
    <>
      {/*<!-- course all tabs --> */}
      <section className="max-w-full" aria-multiselectable="false">
        <ul
          className="flex flex-col lg:flex-row md:flex-row items-center  border-slate-200 gap-10"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="bg-[#d1d5db] rounded" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center 
                
                justify-center gap-2 whitespace-nowrap rounded border-b-2 px-6 text-xl font-bold tracking-wide transition duration-300 hover:bg-[#49BBBD] hover:stroke-[#49BBBD] focus:bg-[#49BBBD] focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 1
                  ? "bg-[#49BBBD] stroke-[#49BBBD] text-white hover:border-[#49BBBD]  hover:text-white focus:border-[#49BBBD] focus:stroke-[#49BBBD] focus:text-white disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#49BBBD] hover:text-white  focus:border-[#49BBBD] focus:stroke-[#49BBBD] focus:text-white disabled:text-slate-500"
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
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Overview</span>
            </button>
          </li>
          <li className="rounded bg-[#d1d5db] " role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center  justify-center gap-2 whitespace-nowrap rounded border-b-2 px-6 text-xl font-bold  tracking-wide transition duration-300 hover:bg-[#49BBBD] hover:stroke-[#49BBBD] focus:bg-[#49BBBD] focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "bg-[#49BBBD] border-[#49BBBD] stroke-emerald-500 text-white  hover:text-white focus:stroke-emerald-700 focus:text-white disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-[#49BBBD] hover:text-white focus:border-[#49BBBD] focus:stroke-[#49BBBD] focus:text-white disabled:text-slate-500"
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
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Review</span>
            </button>
          </li>
          <li className="rounded bg-[#d1d5db]" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-xl font-bold tracking-wide transition duration-300 hover:bg-[#49BBBD] hover:stroke-[#49BBBD] focus:bg-[#49BBBD] focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "bg-[#49BBBD] stroke-emerald-500 text-white hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-white disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-white focus:border-emerald-600 focus:stroke-emerald-600 focus:text-white disabled:text-slate-500"
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
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>Description</span>
            </button>
          </li>
        </ul>
        <div className="">
            {/* overview tabs  */}
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
           <OverviewTabs></OverviewTabs>
          </div>
          {/* review tabs  */}
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
           <ReviewTabs></ReviewTabs>
          </div>
          {/* description tabs  */}
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
            <DescriptionTabs></DescriptionTabs>
          </div>
        </div>
      </section>
      {/*<!-- End Basic lg sized tab --> */}
    </>
  )
}
