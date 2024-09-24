import toast from "react-hot-toast";
import PrimaryTitle from "../../Ui/PrimaryTitle";
import { CHECKOUTImages } from "../../../image-data/checkout";
import { useState } from "react";
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

export default function CheckoutForm() {
  const [clickedCard, setClickedCard] = useState("paypal");

  console.log(clickedCard);

  // Form submission handler
  const onSubmit = (data) => {
    const { name, email, photoUrl, password, gender } = data;

    // Password validation
    if (password.length < 6) {
      return toast.error("Password must have at least 6 characters!");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter!"
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter!"
      );
    }

    console.log(data);

    // apiHandler
    //   .post("/users/register", data)
    //   .then((res) => {
    //     console.log("Register user:", res.data?.data);
    //     toast.success("User Created Successfully");
    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err?.message);
    //     toast.error(err?.message);
    //   });
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
