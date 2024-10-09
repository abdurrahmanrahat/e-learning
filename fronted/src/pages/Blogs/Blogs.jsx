import { useEffect, useState } from "react";
import PageBanner from "../../components/Ui/PageBanner";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { LuBookUp } from "react-icons/lu";
import { SHAREDImages } from "../../image-data/shared";

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

  // blog latest category
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);

  return (
    <div id="Blogs">
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
      {/* blog category  */}
      <div className="container-class mt-20 mb-10">
        <h2 className="text-2xl font-bold mb-5">Reading blog list</h2>
        {/* Reading blog list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
          <div className="relative">
            <img
              className="rounded-xl"
              src="https://i.ibb.co.com/S6jsqZ9/Rectangle-34-3.png"
              alt=""
            />
            <div className="absolute top-1/2 left-[90px] ">
              <button
                onClick={() => setSelectedCategory("JavaScript")}
                className="bg-white font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
              >
                JavaScript
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-xl"
              src="https://i.ibb.co.com/LDywJqH/Rectangle-34-1.png"
              alt=""
            />
            <div className="absolute top-1/2 left-[90px] ">
              <button
                onClick={() => setSelectedCategory("React")}
                className="bg-white font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
              >
                React
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-xl"
              src="https://i.ibb.co.com/SKwf9j6/Rectangle-34-2.png"
              alt=""
            />
            <div className="absolute top-1/2 left-[90px] ">
              <button
                onClick={() => setSelectedCategory("PHP")}
                className="bg-white font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
              >
                PHP
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-xl"
              src="https://i.ibb.co.com/VYcJZLc/Group-43.png"
              alt=""
            />
            <div className="absolute top-1/2 left-[90px] ">
              <button
                onClick={() => setSelectedCategory("UX/UI")}
                className="bg-white font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
              >
                UX/UI
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* show blog category */}
      <div className="bg-[#f0fdfa] lg:p-10">
        <div className="container-class">
          <h2 className="text-2xl font-bold mb-5">Related Blog </h2>
          <div
            id="postContainer"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10 gap-x-4 gap-y-5"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <div
                  key={index}
                  className="drop-shadow-xl bg-[#f8fafc] border h-[560px]"
                >
                  <img className="w-full h-[260px]" src={post.img} alt="" />
                  <div className="mx-5 pt-2 pb-10">
                    <h2 className="text-xl font-bold mt-4 mb-6">
                      {post.title}
                    </h2>
                    <p>{post.shortDescription}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className=" text-xl">
                        #{" "}
                        <span className="text-[#4bc0c0] font-bold">
                          {post.categoryName}
                        </span>
                      </p>
                      <Link to={`/blog-details/${post.id}`}>
                        <button className="hover:text-[#4bc0c0] flex items-center gap-2">
                          See Details{" "}
                          <span>
                            <FaArrowRightLong className="text-[#4bc0c0]" />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts found for this category or search term.</p>
            )}
          </div>
        </div>
      </div>

      {/* latest blog  */}
      <div className="container-class my-20">
        <h2 className="text-2xl font-bold mb-5">Latest blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {blogs?.map((item, index) => (
            <Link key={index}>
              <div className="drop-shadow-xl bg-[#f8fafc] border">
                <img src={item.image} alt="" />
                <div className="mx-5 pt-2 pb-10">
                  <h2 className="text-xl font-bold mt-4 mb-6">{item.title}</h2>
                  <div className="flex items-center gap-6">
                    <p className="flex items-center gap-2 text-gray-500">
                      <RiContactsLine className="text-[#4bc0c0] text-xl font-bold" />{" "}
                      {item.admin}
                    </p>
                    <p className="flex items-center gap-2 text-gray-500">
                      <LuBookUp className="text-[#4bc0c0] text-xl font-bold" />{" "}
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
