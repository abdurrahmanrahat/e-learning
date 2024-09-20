import { HOMEImages } from "../../../image-data/home";
import PrimaryTitle from "../../Ui/PrimaryTitle";

const allInOnFeatures = [
  {
    icon: HOMEImages.allInOne_1,
    title: "Online Billing, Invoicing, & Contracts",
    des: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
  },
  {
    icon: HOMEImages.allInOne_2,
    title: "Easy Scheduling & Attendance Tracking",
    des: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
  },
  {
    icon: HOMEImages.allInOne_3,
    title: "Customer Tracking",
    des: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  },
];

export default function AllInOne() {
  return (
    <div className="flex flex-col gap-10 px-10">
      <PrimaryTitle
        headingPart1={"All-In-One"}
        headingPart2={"Cloud Software"}
        style={"text-center"}
        subtext={
          "TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office."
        }
      />

      <div className="flex flex-col lg:flex-row justify-between gap-20 mt-10">
        {allInOnFeatures.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center px-6 pt-2 pb-10 shadow-myCustomShadow"
          >
            <figure>
              <img src={item.icon} alt={item.title} />
            </figure>
            <div>
              <h6 className="text-[20px] text-center font-medium text-secondary mb-2">
                {item.title}
              </h6>
              <p className="text-[16px] text-center text-myGray">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
