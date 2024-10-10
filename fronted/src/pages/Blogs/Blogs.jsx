import { useEffect, useState } from "react";
import PageBanner from "../../components/Ui/PageBanner";
import { SHAREDImages } from "../../image-data/shared";
import BlogCategory from "../../components/Blogs/BlogCategory/BlogCategory";
import BlogCategoryCard from "../../components/Ui/BlogCategoryCard";
import LatestBlog from "../../components/Blogs/LatestBlog/LatestBlog";
import PrimaryTitle from "../../components/Ui/PrimaryTitle";


export default function Blogs() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("JavaScript");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/blogCategory.json");
      const data = await response.json();
      setBlogPosts(data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filtered = blogPosts.filter(
      (post) => post.categoryName === selectedCategory
    );
    setFilteredPosts(filtered);
  }, [selectedCategory, blogPosts]);

  console.log(filteredPosts);
  // blog latest category
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div>
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
      {/* category section  */}
      <BlogCategory setSelectedCategory={setSelectedCategory}></BlogCategory>

      {/* show blog category */}
      <div className="bg-[#f0fdfa] lg:py-16">
        <div className="container-class">
          {/* <h2 className="text-2xl font-bold mb-5">Related Blog </h2> */}
          <PrimaryTitle headingPart1={"Explore"} headingPart2={"Our Blog"}  />
          <div
            id="postContainer"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20 gap-x-4 gap-y-5 mt-6"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) =>
              <div key={index} >
                <BlogCategoryCard post={post}></BlogCategoryCard>
              </div>
              )
            ) : (
              <p>No posts found for this category or search term.</p>
            )}
          </div>
        </div>
      </div>

      {/* latest blog  */}
      <div className="container-class mb-20 mt-10">
        {/* <h2 className="text-2xl font-bold mb-5">Latest blog</h2> */}
        <PrimaryTitle headingPart1={"Latest"} headingPart2={"Blog"}  />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 mt-6">
          {blogs?.map((item, index) =><LatestBlog key={index} item={item}></LatestBlog>)}
        </div>
      </div>
    </div>
  );
}
