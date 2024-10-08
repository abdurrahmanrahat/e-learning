import { useLoaderData, useParams } from "react-router-dom";
import PageBanner from "../../Ui/PageBanner";
import useUser from "../../../Hooks/api/useUser";
const BlogDetails = () => {
    const {user}=useUser()
  const blogs=useLoaderData();
    const {id}=useParams()
    const idInt=parseInt(id)
    const blog=blogs.find(blog=>blog.id===idInt)
   

    return (
        <div>
          <PageBanner image={blog.img}>
          <h1 className="text-5xl">Blog Details</h1>
      </PageBanner>
      <div className="container-class">
       <div>
       <h2 className="lg:text-3xl text-xl font-semibold text-gray-700 mt-10 mb-5 uppercase">{blog.title}</h2>
       <p className="text-gray-500 mb-10 text-lg">{blog.bigDescription}</p>
       </div>

       <div className="flex items-center gap-3 mb-10">
       <img className="w-[80px] h-[80px] rounded-xl border" src={user?.photoUrl} alt="" />
       <div>
       <p className="text-gray-400">Student</p>
       <h2 className="font-bold text-lg">{user?.name}</h2>
       </div>
       </div>
      </div>
        </div>
    );
};

export default BlogDetails;