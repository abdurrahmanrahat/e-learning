import { useParams } from "react-router-dom";
import PageBanner from "../../components/Ui/PageBanner";
import useBlogById from "../../Hooks/api/useBlogById";
import useUser from "../../Hooks/api/useUser";

export default function BlogDetails() {
  const { user } = useUser();
  const { id } = useParams();
  const { instructorBlog } = useBlogById(id);

  return (
    <div>
      <PageBanner image={instructorBlog?.image}>
        <h1 className="text-5xl">Blog Details</h1>
      </PageBanner>
      <div className="container-class">
        <div>
          <h2 className="lg:text-3xl text-xl font-semibold text-gray-700 mt-10 mb-5 uppercase">
            {instructorBlog?.title}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: instructorBlog?.description }}
          />
        </div>

        <div className="flex items-center gap-3 mb-10 mt-6">
          <img
            className="w-[80px] h-[80px] rounded-xl border"
            src={user?.photoUrl}
            alt=""
          />
          <div>
            <p className="text-gray-400">Student</p>
            <h2 className="font-bold text-lg">{user?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
