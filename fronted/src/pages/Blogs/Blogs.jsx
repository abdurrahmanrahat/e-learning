import PageBanner from "../../components/Ui/PageBanner";
import { SHAREDImages } from "../../image-data/shared";
import WebsiteTitle from "../../components/Ui/WebsiteTitle";
import ShowBlogByCategories from "../../components/Blogs/ShowBlogByCategories/ShowBlogByCategories";
import LatestBlog from "../../components/Blogs/LatestBlog";
import { useBlogs } from "../../Hooks/api/useBlogs";

export default function Blogs() {

  const { blogs } = useBlogs();
  // console.log('All Blogs', blogs);


  return (
    <WebsiteTitle title={'Blogs'}>
      <div id="Blogs">

        {/* banner */}
        <PageBanner image={SHAREDImages.banner_2}>
          <div className="w-full lg:w-[60%] xl:w-[60%] h-full flex flex-col justify-center gap-10 px-4">
            <div className="w-full bg-white p-2 rounded-xl focus:outline-none focus:border-[#49BBBD] border border-[#D9D9D9] text-[#000] flex">
              <input
                type="text"
                name="searchKeyword"
                id="searchKeyword"
                //     value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search your favorite course"
                className="w-[80%] px-6 py-3 border-none focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-l-xl"
              />

              <button
                // onClick={handleSearch}
                className="bg-primary hover:bg-hover transition-all duration-300 px-12 py-3 rounded-xl text-white cursor-pointer w-[20%]"
              >
                Search
              </button>
            </div>
          </div>
        </PageBanner>

        {/* Show Blog by categories */}
        <div>
          <ShowBlogByCategories blogs={blogs} />
        </div>

        {/* latest blog  */}
        <div>
          <LatestBlog blogs={blogs} />
        </div>


      </div>
    </WebsiteTitle>
  );
}
