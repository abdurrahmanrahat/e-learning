import InstructorCard from "../../components/Ui/InstructorCard";
import PageBanner from "../../components/Ui/PageBanner";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import { INSTRUCTORImages } from "../../image-data/Instructors";

const instructorData = [
  {
    id: 1,
    name: "John Doe",
    title: "Web Developer",
    image: INSTRUCTORImages.instructor_1,
    ratings: 4,
    numOfCourses: 12,
    about: "John is a highly skilled web developer with over 5 years of experience in building responsive websites and web applications."
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "SEO Expert",
    image: INSTRUCTORImages.instructor_2,
    ratings: 3,
    numOfCourses: 8,
    about: "Jane is an expert in search engine optimization, helping businesses rank higher on search engines and boost organic traffic."
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Mobile App Developer",
    image: INSTRUCTORImages.instructor_3,
    ratings: 5,
    numOfCourses: 15,
    about: "Michael specializes in mobile app development, creating user-friendly and innovative mobile applications for Android and iOS."
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    image: INSTRUCTORImages.instructor_1,
    ratings: 2,
    numOfCourses: 10,
     about: "Emily is a creative UI/UX designer with a passion for designing intuitive and visually appealing user interfaces."
  },
];

export default function Instructors() {
  return (
    <div className="w-full">
      <PageBanner>Instructors</PageBanner>
      <div className="py-16 container-class px-10">
        <PrimaryTitle
          headingPart1={"Our Expert"}
          headingPart2={"Instructors"}
          style={"text-start"}
        />
        <div className="grid grid-cols-3 gap-x-8 gap-y-14 my-10">
            {
                instructorData?.map(item => <InstructorCard key={item.id} item={item}>
                </InstructorCard>)
            }
        </div>
      </div>
    </div>
  );
}
