import toast from "react-hot-toast";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import { CHECKOUTImages } from "../../../image-data/checkout";
import { useState } from "react";
import PaypalCardForm from "../PaypalCardForm/PaypalCardForm";
import SSLCommerceForm from "../SSLCommerceForm/SSLCommerceForm";
import VisaCardForm from "../VisaCardForm/VisaCardForm";
import axios from "axios";
// import useAxios from "../../../Hooks/useAxios";

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

export default function CheckoutForm({course}) {
  const [clickedCard, setClickedCard] = useState("paypal");
  // const apiHandler = useAxios();

  // Form submission handler
  const onSubmit = (data) => {

    const paymentInfo = {
      name: data.name,
      email: data.email,
      address: data.address,
      country: data.country,
      phone: data.phone,
      productName: course.courseTitle,
      amount: course.price,
    }
    console.log(paymentInfo)

    //apiHandler
      axios.post("http://localhost:5000/paymentGataway/sslCommerce", paymentInfo)
      .then((res) => {
        console.log("url:", res.data.redirect_url);
        window.location.replace(res.data.redirect_url)
        // toast.success("User Created Successfully");
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
              className={`cursor-pointer border-[1px] ${clickedCard === item.name ? 'border-[#49BBBD]' : 'border-[#D9D9D9]'} py-2 px-4 rounded-xl`}
            >
              <img src={item.logo} alt="" />
            </figure>
          ))}
        </div>
        <div>
            {
               clickedCard === 'paypal' &&
               <PaypalCardForm onSubmit={onSubmit}/> 
            }
            {
               clickedCard === 'SSLCommerce' &&
               <SSLCommerceForm onSubmit={onSubmit}/> 
            }
            {
               clickedCard === 'visa' &&
               <VisaCardForm onSubmit={onSubmit}/> 
            }
        </div>
      </div>
    </div>
  );
}
