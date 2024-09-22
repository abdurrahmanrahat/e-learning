import { useState } from "react";
import CourseCard from "./CourseCard";
import ReviewCard from "./ReviewCard";

export default function Tabs({ tabs, tabItems }) {
  const [tabSelected, setTabSelected] = useState("About");

  const handleTabs = (value) => {
    setTabSelected(value);
  };

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul className="flex items-center gap-2" role="tablist">
        {tabs?.map((item, index) => (
          <li key={index} className="" role="presentation">
            <button
              onClick={() => handleTabs(item)}
              className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-primary px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200`}
              role="tab"
            >
              <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="">
        <div className={`px-6 py-4`} role="tabpanel">
          {tabSelected === "About" && <p>{tabItems?.about}</p>}
          {tabSelected === "Courses" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {tabItems?.instructCourses.map((item) => (
                <CourseCard key={item?.id} popularCourse={item}></CourseCard>
              ))}
            </div>
          )}
          {tabSelected === "Reviews" && (
            <div className="flex flex-col gap-10">
              {tabItems?.reviews.map((item) => (
                <ReviewCard key={item?.id} review={item}></ReviewCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
