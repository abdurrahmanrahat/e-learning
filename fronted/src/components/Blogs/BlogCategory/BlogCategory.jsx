import PrimaryTitle from "../../Ui/PrimaryTitle";

const categories = [
  {
    title: "JavaScript",
    img: "https://i.ibb.co.com/S6jsqZ9/Rectangle-34-3.png",
  },
  {
    title: "React",
    img: "https://i.ibb.co.com/LDywJqH/Rectangle-34-1.png",
  },
  {
    title: "PHP",
    img: "https://i.ibb.co.com/SKwf9j6/Rectangle-34-2.png",
  },
  {
    title: "UX/UI",
    img: "https://i.ibb.co.com/VYcJZLc/Group-43.png",
  },
];

const BlogCategory = () => {
  return (
    <div className="flex flex-col gap-6">
      <PrimaryTitle style={'text-center lg:text-start xl:text-start'} headingPart1={"Choose your"} headingPart2={"Category"} />
      <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-8 justify-center items-center">
        {categories?.map((item, index) => (
          <div key={index} className="relative rounded-xl cursor-pointer group">
            <img className="rounded-xl" src={item.img} alt={item.title} />
            <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0 rounded-xl"></div>
            <div className="absolute top-0 w-full h-full flex justify-center items-center">
              <button className="bg-white font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80 group-hover:scale-[1.1] transition-all duration-500 ease-in-out">
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
