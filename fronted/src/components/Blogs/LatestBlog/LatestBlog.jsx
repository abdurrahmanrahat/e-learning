import { LuBookUp } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";

const LatestBlog = ({item}) => {
    return (
        <div>
              <div className="drop-shadow-xl bg-[#f8fafc] border">
                <img src={item.image} alt="" />
                <div className="mx-5 pt-2 pb-10">
                  <h2 className="text-xl font-bold mt-4 mb-6">{item.title}</h2>
                  <div className="flex items-center gap-6">
                    <p className="flex items-center gap-2 text-gray-500">
                      <RiContactsLine className="text-[#4bc0c0] text-xl font-bold" />{" "}
                      {item.admin}
                    </p>
                    <p className="flex items-center gap-2 text-gray-500">
                      <LuBookUp className="text-[#4bc0c0] text-xl font-bold" />{" "}
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default LatestBlog;