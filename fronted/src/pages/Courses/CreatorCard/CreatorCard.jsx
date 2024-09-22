const CreatorCard = ({ creator }) => {
  const { titleName, image, description } = creator;
  return (
    <div className="relative">
      <div className="bg-[#f8fafc] shadow-xl  text-center  px-5 lg:pt-28 pt-16 lg:pb-10 pb-5 lg:h-[350px] h-[300px]">
        <h2 className="text-xl text-gray-600  font-bold mb-3">{titleName}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="absolute lg:bottom-[270px] bottom-[250px]  lg:left-32 md:left-[120px] left-[150px]">
        <img
          className="lg:w-[160px] lg:h-[150px] w-[120px] "
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default CreatorCard;
