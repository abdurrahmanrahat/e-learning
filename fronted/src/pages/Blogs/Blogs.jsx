import PageBanner from "../../components/Ui/PageBanner";
import { SHAREDImages } from "../../image-data/shared";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";
import LatestBlog from "../../components/Blogs/LatestBlog";
import { useBlogs } from "../../Hooks/api/useBlogs";
import BlogCard from "../../components/Ui/BlogCard";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";
import BlogCategory from "../../components/Blogs/BlogCategory/BlogCategory";

export default function Blogs() {
  const { blogs } = useBlogs();

  console.log(blogs);
  return (
    <WebsiteTitle title={"Blogs"}>
      <div id="Blogs">
        {/* banner */}
        <PageBanner image={SHAREDImages.banner_2}>
          <div className="w-full lg:w-[60%] xl:w-[60%] h-full flex flex-col justify-center gap-10 px-4">
            <form>
              <div className="w-full bg-white p-2 rounded-xl focus:outline-none focus:border-[#49BBBD] border border-[#D9D9D9] text-[#000] flex">
                <input
                  type="text"
                  name="searchKeyword"
                  id="searchKeyword"
                  placeholder="Search your favorite course"
                  className="w-[80%] px-6 py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl"
                  // onChange={handleSearch}
                />
                <div className="w-[20%]">
                  <button
                    className={`inline-flex w-full h-12 px-4 items-center justify-center gap-2 whitespace-nowrap rounded-r-xl text-sm font-medium tracking-wide  text-[#FFF] bg-primary`}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </PageBanner>

        <div className="container-class">
          {/* blog categories */}
          <div className="my-10">
            <BlogCategory />
          </div>

          {/* blogs */}
          <div className="flex flex-col gap-6 my-10">
            <PrimaryTitle
              style={"text-center lg:text-start xl:text-start"}
              headingPart1={"Explore your"}
              headingPart2={"knowledge"}
            />
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-14">
              {blogs?.map((item) => (
                <BlogCard key={item._id} blogId={item._id} />
              ))}
            </div>
          </div>

          {/* latest blog  */}
          <div className="my-10">
            <LatestBlog blogs={blogs} />
          </div>
        </div>
      </div>
    </WebsiteTitle>
  );
}
