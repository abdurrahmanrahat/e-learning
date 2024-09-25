import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

export default function PaymentFailed() {
  return (
    <div className="w-full flex justify-center items-center my-24">
      <div className="flex flex-col gap-8 items-center">
        <span className="text-8xl text-[#D82B24]">
          <MdCancel />
        </span>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Oh no!! Your payment failed</h2>
          <h4 className="text-lg">
            Don{"'"}t worry, we{"'"}ll try your payment again next time
          </h4>
        </div>
        <Link to="/">
          <button className="bg-[#D82B24] px-12 py-4 rounded-xl text-white cursor-pointer w-full mt-2">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  );
}
