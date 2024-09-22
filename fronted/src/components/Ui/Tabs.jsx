import { useState } from "react";
import PrimaryTitle from "./PrimaryTitle";

export default function Tabs({ tabs, tabItems }) {
  const [tabSelected, setTabSelected] = useState(0);

  const handleTabs = (value) => {
    setTabSelected(value);
  };

  return (
    <section className="max-w-full" aria-multiselectable="false">
      <ul className="flex items-center gap-2" role="tablist">
        {tabs?.map((item, index) => (
          <li key={index} className="" role="presentation">
            <button
              onClick={() => handleTabs(index)}
              className={`inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded  px-5 text-sm font-medium tracking-wide  transition duration-300 hover:bg-primary hover:text-[#FFF] ${
                tabSelected === index
                  ? "bg-primary text-white"
                  : "bg-[#bbbbbb80] text-[#696969]"
              }`}
              role="tab"
            >
              <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className={`px-6 py-4`} role="tabpanel">
        <div className="flex flex-col gap-6 py-10">
          <PrimaryTitle
            headingPart1={tabItems[tabSelected]?.title}
            style={"text-start"}
          />
          {tabItems[tabSelected]?.content}
        </div>
      </div>
    </section>
  );
}
