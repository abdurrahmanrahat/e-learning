import { FaCheckCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

export default function PaymentSuccess() {
  const { trans_id } = useParams();
  return (
    <div className="w-full flex justify-center items-center my-24">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-8xl text-[#49BBBD]">
          <FaCheckCircle />
        </span>
        <h2 className="text-3xl">Payment Successful</h2>
        <h4 className="text-lg">Transaction Number: {trans_id}</h4>
        <div className="bg-[#5B5B5B] h-[1px] w-full"></div>
        <h2>Amount Paid: 000</h2>
        <p className="text-base">Redirect to your <Link to={"/dashboard/admin"} className="text-md underline">dashboard...</Link></p>
      </div>
    </div>
  );
}
