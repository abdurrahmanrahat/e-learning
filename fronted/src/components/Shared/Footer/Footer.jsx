import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// footer elements is statics
const footerElements = [
  {
    label: "Product",
    element: ["Features", "Category", "Courses", "Instructors", "Blogs"],
  },
  {
    label: "Company",
    element: ["About", "Careers", "Developers"],
  },
  {
    label: "Legal",
    element: ["Terms", "Privacy", "Cookies"],
  },
  {
    label: "Social",
    element: ["Linkedin", "Facebook", "Twitter", "Instagram"],
  },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleLinksMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // handle navigate footer links with section and page ways
  const handleNavigation = (item) => {
    const isHomeSection = item === "Features" || item === "Category";
    const isAbout = item === "About";
    const isDevelopers = item === "Developers";
    const isComingSoonLinks =
      item === "Terms" ||
      item === "Privacy" ||
      item === "Cookies" ||
      item === "Twitter" ||
      item === "Instagram";

    if (isComingSoonLinks) {
      toast.error(`${item} links coming soon...`);
      return;
    }
    if (isHomeSection) {
      if (location.pathname === "/") {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } 
    else if (isAbout) {
      navigate("/about-us");
    }
    else if(isDevelopers){
      navigate(`/about-us#${item}`);
      setTimeout(() => {
        const element = document.getElementById(item);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
     else {
      navigate(`/${item}`);
    }
  };

  return (
    <div className="bg-[#101828] pt-10 lg:pt-20 xl:pt-20 pb-6">
      <div className="container-class flex flex-col items-between gap-14">
        {/* top layer */}
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-10">
          <div className="text-white text-2xl flex flex-col gap-10 justify-start w-full lg:w-[40%] xl:w-[40%]">
            <span>BrainWave</span>
            <p className="text-[#646464] text-base">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* large device */}
          <div className="w-full lg:w-[60%] xl:w-[60%] flex justify-between gap-10 text-white">
            {footerElements?.map((item, index) => (
              <div
                className="hidden lg:flex xl:flex flex-col gap-4"
                key={index}
              >
                <h4 className="text-[#98A2B3]">{item.label}</h4>
                <ul className="flex flex-col gap-4">
                  {item?.element.map((item, index) => (
                    <li
                      onClick={() => handleNavigation(item)}
                      key={index}
                      className="text-[#EAECF0] cursor-pointer hover:underline transition-all duration-300 ease-in-out"
                    >{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:hidden xl:hidden flex flex-col gap-4 w-full">
              {footerElements?.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div
                    onClick={() => handleLinksMenu(index)}
                    className="flex justify-between gap-4 text-xl"
                  >
                    <span>{item.label}</span>
                    {activeIndex === index ? (
                      <span>
                        <FaAngleUp />
                      </span>
                    ) : (
                      <span>
                        <FaAngleDown />
                      </span>
                    )}
                  </div>
                  {activeIndex === index && (
                    <ul className="flex flex-col gap-4 text-lg">
                      {item.element.map((item, index) => (
                        <li className="cursor-pointer" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* bottom layer */}
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-center gap-4">
          <div className="text-[#98A2B3] text-md">
            <span>© 2022 Ed-Circle. All rights reserved.</span>
          </div>
          <div className="flex gap-4 text-[#98A2B3] text-3xl">
            <a href="/">
              <span>
                <FaSquareXTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/mdhasankha" target="_blank">
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063140996982"
              target="_blank"
            >
              <span>
                <FaFacebook />
              </span>
            </a>
            <a href="/">
              <span>
                <FaInstagramSquare />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
