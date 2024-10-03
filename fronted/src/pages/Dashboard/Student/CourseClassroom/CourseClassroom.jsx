import { useParams } from "react-router-dom";
import { useCourses } from "../../../../Hooks/api/useCourses";
import ProgressBar from "../../../../components/Ui/ProgressBar";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSearch } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import PrimaryTitle from "../../../../components/Ui/PrimaryTitle";
import Tabs from "../../../../components/Ui/Tabs";

const milestones = [
  {
    milestoneName: "Milestone 1: Getting Started",
    description:
      "This milestone covers the basics of web development, including an introduction to HTML.",
    modules: [
      {
        moduleName: "Introduction to Web Development",
        content: [
          {
            title: "What is Web Development?",
            duration: "10:35",
            contentLink:
              "https://www.youtube.com/embed/UYbN4jhDg6Q?si=XgjHgu6tT_I9SAay",
          },
          {
            title: "Getting Started with HTML",
            duration: "15:20",
            contentLink:
              "https://www.youtube.com/embed/Gu6k47UjZ44?si=IwqbhceFsUUArXRQ",
          },
        ],
      },
    ],
  },
  {
    milestoneName: "Milestone 2: CSS Basics",
    description:
      "Learn how to style web pages using CSS, covering essential styling techniques and properties.",
    modules: [
      {
        moduleName: "Styling with CSS",
        content: [
          {
            title: "Introduction to CSS",
            duration: "12:00",
            contentLink: "https://www.youtube.com/embed/1PnVor36_40?si=abc123",
          },
          {
            title: "CSS Selectors and Properties",
            duration: "18:30",
            contentLink: "https://www.youtube.com/embed/54ZJmMGVpP8?si=xyz456",
          },
        ],
      },
    ],
  },
  {
    milestoneName: "Milestone 3: JavaScript Essentials",
    description:
      "Dive into the fundamentals of JavaScript, the core programming language of the web.",
    modules: [
      {
        moduleName: "Introduction to JavaScript",
        content: [
          {
            title: "What is JavaScript?",
            duration: "14:45",
            contentLink: "https://www.youtube.com/embed/W6NZfCO5SIk?si=def789",
          },
          {
            title: "JavaScript Variables and Data Types",
            duration: "20:10",
            contentLink: "https://www.youtube.com/embed/hdI2bqOjy3c?si=ghi101",
          },
        ],
      },
    ],
  },
  {
    milestoneName: "Milestone 4: Version Control with Git",
    description:
      "Understand how to use Git and GitHub for version control and collaboration on coding projects.",
    modules: [
      {
        moduleName: "Understanding Git and GitHub",
        content: [
          {
            title: "Introduction to Git",
            duration: "11:55",
            contentLink: "https://www.youtube.com/embed/8JJ101D3knE?si=jkl102",
          },
          {
            title: "Using GitHub for Collaboration",
            duration: "22:40",
            contentLink: "https://www.youtube.com/embed/USjZcfj8yxE?si=mno345",
          },
        ],
      },
    ],
  },
  {
    milestoneName: "Milestone 5: Responsive Design",
    description:
      "Learn to build websites that look great on all devices by mastering responsive design techniques.",
    modules: [
      {
        moduleName: "Building Responsive Websites",
        content: [
          {
            title: "Introduction to Responsive Design",
            duration: "16:25",
            contentLink: "https://www.youtube.com/embed/srvUrASNj0s?si=pqr678",
          },
          {
            title: "Using Flexbox and Grid",
            duration: "19:50",
            contentLink: "https://www.youtube.com/embed/JJSoEo8JSnc?si=stu910",
          },
        ],
      },
    ],
  },
];

export default function CourseClassroom() {
  const { id } = useParams();
  const { course } = useCourses(null, id);
  const [description, setDescription] = useState(milestones[0]?.description);
  const [contents, setContents] = useState(
    milestones[0]?.modules[0]?.content[1]
  );
  const [activeModuleIndex, setActiveModuleIndex] = useState(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(null);

  const handleActiveMilestoneIndex = (index) => {
    setActiveMilestoneIndex(activeMilestoneIndex === index ? null : index);
  };
  const handleActiveModuleIndex = (index) => {
    setActiveModuleIndex(activeModuleIndex === index ? null : index);
  };

  const tabsItem = [
    {
      content: <p>{description}</p>,
    },
    {
      content: <p>This is notes</p>,
    },
    {
      content: <p>This is resources</p>,
    },
  ];
  console.log(description);

  return (
    <div className="flex flex-col gap-10 my-6">
      <PrimaryTitle
        headingPart1={`${course?.data?.title} with`}
        headingPart2={`${course?.data?.instructorName}`}
      />
      <div className="flex flex-col gap-2 w-full ">
        <div className="flex gap-2 justify-start items-center border-b-[3px] border-b-[#49BBBD] pb-2">
          <span></span>
          <span className="text-xl font-medium text-primary">{contents?.title}</span>
        </div>
        <div className="w-full flex justify-center items-start gap-6">
          {/* video */}
          <div className="w-[60%]">
            {/* video content */}
            <div className="p-4 w-full">
              <iframe
                className="w-full h-[350px] rounded-xl"
                src={contents?.contentLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            {/* description */}
            <div className="h-[40%] mt-10">
              <Tabs
                tabs={["Description", "Notes", "Resources"]}
                tabItems={tabsItem}
              />
            </div>
          </div>

          {/* module */}
          <div className="w-[40%] flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2 text-primary mb-4">
              <span className="">Running Module:</span>
              <span className="w-full">
                <ProgressBar value={80} />
              </span>
            </div>
            <div className="bg-[#49BBBD] shadow-myCustomShadow p-6 rounded-xl">
              <div className="w-full rounded-xl focus:outline-none focus:border-[#49BBBD] border text-[#000] flex items-center bg-white shadow-myCustomShadow">
                <div className="text-[#9D9B9B] cursor-pointer text-2xl w-[10%] flex justify-center">
                  <span>
                    <FaSearch />
                  </span>
                </div>
                <input
                  type="text"
                  name="searchKeyword"
                  id="searchKeyword"
                  placeholder="Search your favorite course"
                  className="w-[90%] py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-r-xl"
                  //   onChange={(e) => handleSearch(e)}
                />
              </div>
            </div>

            <div className="custom-scrollbar h-[60vh] overflow-y-scroll flex flex-col gap-4">
              {milestones?.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#49BBBD] shadow-myCustomShadow p-6 rounded-xl"
                  onClick={() => setDescription(item?.description)}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleActiveMilestoneIndex(index)}
                  >
                    <h2 className="text-2xl">{item.milestoneName}</h2>
                    {activeMilestoneIndex === index ? (
                      <span>
                        <FaAngleUp />
                      </span>
                    ) : (
                      <span>
                        <FaAngleDown />
                      </span>
                    )}
                  </div>
                  {activeMilestoneIndex === index && (
                    <div className="flex flex-col gap-4 py-4 rounded-2xl">
                      {item?.modules?.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-4 bg-[#2a494967] p-4 rounded-2xl text-white"
                        >
                          <div
                            onClick={() => handleActiveModuleIndex(index)}
                            className="flex justify-between gap-4 text-xl cursor-pointer"
                          >
                            <span>{item.moduleName}</span>
                            {activeModuleIndex === index ? (
                              <span className="cursor-pointer">
                                <FaAngleUp />
                              </span>
                            ) : (
                              <span className="cursor-pointer">
                                <FaAngleDown />
                              </span>
                            )}
                          </div>
                          <span>1h. 30m. 10/1</span>
                          {activeModuleIndex === index && (
                            <ul>
                              {item?.content.map((item, index) => (
                                <li
                                  className="border-t-[2px] border-t-[#9D9B9B] py-4 px-2 cursor-pointer flex flex-col gap-2"
                                  key={index}
                                  onClick={() => setContents(item)}
                                >
                                  <span>{item.title}</span>
                                  <div className="flex gap-2 items-center text-md">
                                    <span>
                                      <FiYoutube />
                                    </span>
                                    <span>{item.duration}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
