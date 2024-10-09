
const BlogCategory = ({setSelectedCategory}) => {

    return (
       
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
              className="bg-white focus:text-white focus:bg-[#4bc0c0] hover:bg-[#4bc0c0] font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
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
              className="bg-white focus:text-white focus:bg-[#4bc0c0] hover:bg-[#4bc0c0] font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
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
              className="bg-white focus:text-white focus:bg-[#4bc0c0] hover:bg-[#4bc0c0] font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
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
              className="bg-white focus:text-white focus:bg-[#4bc0c0] hover:bg-[#4bc0c0] font-bold rounded-xl px-6  py-3 drop-shadow-lg opacity-80"
            >
              UX/UI
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BlogCategory;