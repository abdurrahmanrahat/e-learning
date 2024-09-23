
export default function PageBanner({ children, image }) {
  return (
    <div className={`relative h-[70vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh]`} style={{backgroundImage: `URL(${image})`, backgroundPositionX: 'center', backgroundPositionY: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div>
        <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0"></div>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center text-[#FFF]">
        {children}
      </div>
    </div>
  );
}
