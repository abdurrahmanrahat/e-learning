import { SHAREDImages } from "../../image-data/shared";

export default function PageBanner({ children }) {
  return (
    <div className={`relative h-[40vh]`} style={{backgroundImage: `URL(${SHAREDImages.banner_1})`, backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div>
        <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0"></div>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center text-3xl text-[#FFF]">
        {children}
      </div>
    </div>
  );
}
