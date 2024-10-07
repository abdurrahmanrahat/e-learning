import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";
import { CHECKOUTImages } from "../../../image-data/checkout";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import PaypalCardForm from "../PaypalCardForm/PaypalCardForm";
import SSLCommerceForm from "../SSLCommerceForm/SSLCommerceForm";
import VisaCardForm from "../VisaCardForm/VisaCardForm";

const cards = [
  {
    name: "paypal",
    logo: CHECKOUTImages.checkout_1,
  },
  {
    name: "SSLCommerce",
    logo: CHECKOUTImages.checkout_2,
  },
  {
    name: "visa",
    logo: CHECKOUTImages.checkout_3,
  },
];

export default function CheckoutForm({ course }) {
  const [clickedCard, setClickedCard] = useState("paypal");
  const apiHandler = useAxios();

  console.log(course);
  // Form submission handler
  const onSubmit = (data) => {
    const paymentInfo = {
      courseId: course?.data?._id,
      name: data.name,
      email: data.email,
      address: data.address,
      country: data.country,
      phone: data.phone,
      productName: course?.data.title,
      amount: course?.data.price,
      category: course?.data.category,
      city: data.city,
      post_code: data.postCode,
      currency: data.currency,
    };
    // console.log(paymentInfo)
    console.log(paymentInfo);

    apiHandler
      .post("http://localhost:5000/paymentGateway/sslCommerce", paymentInfo)
      .then((res) => {
        console.log("payment:", res);
        // toast.success(`${res.data.redirect_url}`);
        window.location.replace(res.data.redirect_url);
      })
      .catch((err) => {
        console.log(err?.message);
        toast.error(err?.message);
      });
  };

  return (
    <div className="">
      <div className="w-full">
        <PrimaryTitle
          headingPart1={"Checkout"}
          subtext={"Cart Type"}
          style={"text-start"}
        />

        <div className="flex justify-between gap-6 w-full lg:w-[70%] xl:w-[70%] py-10">
          {cards?.map((item, index) => (
            <figure
              key={index}
              onClick={() => setClickedCard(item.name)}
              className={`cursor-pointer border-[1px] ${
                clickedCard === item.name
                  ? "border-[#49BBBD]"
                  : "border-[#D9D9D9]"
              } py-2 px-4 rounded-xl`}
            >
              <img src={item.logo} alt="" />
            </figure>
          ))}
        </div>
        <div>
          {clickedCard === "paypal" && <PaypalCardForm onSubmit={onSubmit} />}
          {clickedCard === "SSLCommerce" && (
            <SSLCommerceForm onSubmit={onSubmit} />
          )}
          {clickedCard === "visa" && <VisaCardForm onSubmit={onSubmit} />}
        </div>
      </div>
    </div>
  );
}
