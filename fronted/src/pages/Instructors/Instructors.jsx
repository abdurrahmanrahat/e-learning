import InstructorCard from "../../components/Ui/InstructorCard";
import PageBanner from "../../components/Ui/PageBanner";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import TestimonialsForHome from "../../components/Ui/Testimonials/TestimonialsForHome/TestimonialsForHome";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";
import { useUsers } from "../../Hooks/api/useUsers";
import { SHAREDImages } from "../../image-data/shared";

export default function Instructors() {
  const {users} = useUsers();
  const instructors = users?.filter(item => item?.role === "instructor")
  console.log(instructors)


  return (
    <WebsiteTitle title={'Instructors'}>
      <div className="w-full" id="Instructors">
        <PageBanner image={SHAREDImages.banner_1}>
          <h2 className="text-5xl">Instructors</h2>
        </PageBanner>

        <div className="pt-16 container-class">
          <PrimaryTitle
            headingPart1={"Our Expert"}
            headingPart2={"Instructors"}
            style={"text-start"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-14 py-10">
            {instructors?.map((item) => (
              <InstructorCard key={item.id} item={item}></InstructorCard>
            ))}
          </div>
        </div>

        <div className="pb-12 container-class">
        <TestimonialsForHome />
      </div>
      </div>
    </WebsiteTitle>
  );
}
