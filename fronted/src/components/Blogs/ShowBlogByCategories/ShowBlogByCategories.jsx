import BlogCard from "../../Ui/BlogCard";

const ShowBlogByCategories = ({ blogs }) => {


  return (
    <div>
      {/* blog category  */}
      <div className="container-class mt-20 mb-10">
        {/* Reading blog list */}
        <div className="flex flex-col gap-2 mb-5">
          <h2 className={`text-[34px] font-medium`}>
            <span className="text-[#00CBB8]">Blog</span>{" "}
            <span className="text-[#101828]">Categories</span>
          </h2>
        </div>
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
      <div className="lg:p-10">
        <div className="container-class">
          <div className="flex flex-col gap-2 mb-5">
            <h2 className={`text-[34px] font-medium`}>
              <span className="text-[#00CBB8]">
                {selectedCategory ? selectedCategory : "Related"}
              </span>{" "}
              <span className="text-[#101828]">Blogs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10 gap-x-4 gap-y-5">
            {filteredBlogs?.length > 0 ? (
              filteredBlogs?.map((blog, index) => (
                <BlogCard key={index} blog={blog} index={index} />
              ))
            ) : (
              <p>No posts found for this category or search term.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBlogByCategories;
