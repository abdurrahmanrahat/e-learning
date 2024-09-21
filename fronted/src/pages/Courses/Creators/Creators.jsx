import { useEffect, useState } from "react";
import CreatorCard from "../CreatorCard/CreatorCard";


const Creators = () => {
  const [creators, SetCreators] = useState([]);
  useEffect(() => {
    fetch("creatorsData.json")
      .then((res) => res.json())
      .then((data) => SetCreators(data));
  }, []);
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between mb-24 mt-10 lg:mt-24 mx-5 lg:mx-0 md:mx-0">
        <h2 className="lg:text-2xl md:text-2xl text-xl font-bold  mb-5 text-gray-600">
          Classes tought by real creators
        </h2>
        <p
          className="lg:text-xl md:text-xl  font-bold text-[#49BBBD]
"
        >
          See all
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-28 mx-2 lg:mx-0">
        {creators.map((creator) => (
          <CreatorCard creator={creator} key={creator._id}></CreatorCard>
        ))}
      </div>
    </div>
  );
};

export default Creators;
