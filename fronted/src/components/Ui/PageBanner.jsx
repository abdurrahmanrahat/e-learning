import { SHAREDImages } from "../../image-data/shared";

export default function PageBanner({ children }) {
  return (
    <div className={`relative h-[40vh]`} style={{backgroundImage: `URL(${SHAREDImages.banner_1})`, backgroundPositionX: 'center', backgroundPositionY: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        {/* <figure className="h-full w-full">
          <img className="w-full h-full" src={} alt="" />
        </figure> */}
      <div>
        <div className="w-full h-full bg-[#000] bg-opacity-40 absolute inset-0"></div>
      </div>
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <h2 className="text-3xl text-[#FFF]">{children}</h2>
      </div>
    </div>
  );
}
