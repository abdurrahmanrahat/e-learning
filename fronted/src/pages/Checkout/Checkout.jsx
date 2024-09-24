import { useEffect, useState } from "react";
import CheckoutForm from "../../components/Checkout/CheckoutForm/CheckoutForm";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);

  const course = courses?.find((item) => item.id === Number(id));

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/popularCourses.json");
        setCourses(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCourses();
  }, []);

  console.log(course);

  return (
    <div className="flex flex-col-reverse lg:flex-row xl:flex-row justify-between items-start gap-10 container-class my-20">
      <div className="w-full lg:w-[60%] xl:w-[60%] shadow-myCustomShadow p-10 rounded-xl">
        <CheckoutForm />
      </div>
      <div className="w-full lg:w-[40%] xl:w-[40%] bg-[#EBF5FF] p-10 rounded-xl">
        <PrimaryTitle headingPart1={"Summery"} />
        <div className="flex flex-col gap-6 justify-normal mt-4">
          <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            {/*  <!-- Image --> */}
            <figure className="flex-1 rounded-xl">
              <img
                src={course?.thumbnail}
                alt={course?.courseTitle}
                className="object-cover min-h-full aspect-auto rounded-xl"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-md font-medium text-slate-700">
                    {course?.courseTitle}
                  </h3>
                  <p className="text-sm text-slate-400">{course?.instructor}</p>
                </div>
              </header>
              <p className="mb-4">{course?.description.slice(0, 15)} . . .</p>
              <span className="text-xl font-medium text-slate-700">
                $ {course?.price}
              </span>
            </div>
          </div>
          <div className="bg-[#5B5B5B] h-[1px] w-full"></div>
          <div className="text-[#5B5B5B] text-xl flex justify-between">
            <span>Sub Total</span>
            <span>${" "}{course?.price}</span>
          </div>
          <div className="bg-[#5B5B5B] h-[1px] w-full"></div>
          <div className="text-[#5B5B5B] text-xl flex justify-between">
            <span>Discount</span>
            <span>0%</span>
          </div>
          <div className="bg-[#5B5B5B] h-[1px] w-full"></div>
          <div className="text-[#5B5B5B] text-xl font-semibold flex justify-between">
            <span>Total</span>
            <span>${" "}{course?.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
