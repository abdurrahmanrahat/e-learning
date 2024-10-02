import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import jsPDF from "jspdf";

export default function PaymentSuccess() {
  const { trans_id } = useParams();
  const [paymentReceipt, setPaymentReceipt] = useState({});

  useEffect(() => {
    const getReceipt = async () => {
      await axios
        .get(`http://localhost:5000/payment-history/${trans_id}`)
        .then((res) => {
          console.log(res.data);
          setPaymentReceipt(res.data);
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(`${err.message}`);
        });
    };
    getReceipt();
  }, [trans_id]);

  console.log(paymentReceipt?.orderInfo?.amount);

  // handleDownloadBtn
  const handleDownloadBtn = async () => {
    const doc = new jsPDF();

    // Set font and style for title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(40, 44, 108);
    doc.text("Pay Receipt", 105, 20, { align: "center" });

    // Add horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 25, 190, 25);

    // Add dynamic data from props
    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);

    doc.text(`Customer Name: ${paymentReceipt?.orderInfo?.name}`, 20, 40);
    doc.text(`Total Amount: $${paymentReceipt?.orderInfo?.amount}`, 20, 50);
    doc.text(`Date: ${paymentReceipt?.date}`, 20, 60);
    doc.text(`Transition Id: ${paymentReceipt?.transactionId}`, 20, 70);
    doc.text(`Payment Method: Online`, 20, 80);

    // Draw rectangle around payment data
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.2);
    doc.rect(15, 35, 180, 50);

    // Footer text
    doc.setFontSize(12);
    doc.text("Thank you for your payment!", 105, 130, { align: "center" });

    // Save the PDF
    doc.save("styled-payment-receipt.pdf");
  };

  return (
    <div className="w-full flex justify-center items-center my-24">
      <div className="flex flex-col gap-6 items-center">
        <span className="text-8xl text-[#49BBBD]">
          <FaCheckCircle />
        </span>
        <h2 className="text-3xl">Payment Successful</h2>
        <h4 className="text-lg flex flex-col lg:flex-row xl:flex-row gap-2 justify-center items-center">
          <span>Transaction Number:</span>
          <span>{trans_id}</span>
        </h4>
        <div className="bg-[#5B5B5B] h-[1px] w-full"></div>
        <h2 className="text-2xl font-medium">
          Amount Paid: ${paymentReceipt?.orderInfo?.amount}
        </h2>
        <p className="text-base">
          Redirect to your{" "}
          <button
            onClick={handleDownloadBtn}
            className="text-md text-blue-500 underline"
          >
            Download Pay Receipt...
          </button>
        </p>
        <Link to="/dashboard/admin/enrolled-courses">
          <button className="bg-[#49BBBD] px-12 py-4 rounded-xl text-white cursor-pointer w-full mt-2 hover:scale-[1.2] transition-all duration-500 ease-in-out">
            Go to Class
          </button>
        </Link>
      </div>
    </div>
  );
}
