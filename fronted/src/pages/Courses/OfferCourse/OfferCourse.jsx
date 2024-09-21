const OfferCourse = () => {
    return (
      <div>
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-0 md:lx-0 items-center lg:justify-between my-10 lg:mt-24">
          <h2 className="lg:text-2xl md:text-2xl text-xl font-bold  mb-5 text-gray-600">
            Top Education offers and deals are listed here
          </h2>
          <p
            className="lg:text-xl md:text-xl  font-bold text-[#49BBBD]
  "
          >
            See all
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 lg:mx-0">
          <div className="relative">
            <img src="https://i.ibb.co.com/9NDXSFf/Rectangle-187.png" alt="" />
            <div className="absolute lg:top-16 md:top-9 top-10 text-white lg:left-10 left-10">
              <button
                className="text-5xl font-bold px-3 text-center py-6 rounded-lg text-white bg-[#49BBBD]
  "
              >
                50%
              </button>
              <h3 className="lg:text-2xl text-3xl md:text-xl font-bold mt-5">Full Stack Web developer</h3>
              <p className="mt-2 font-bold "> 1. Front  end</p>
              <p className=" font-bold my-2"> 2. Back end developer</p>
              <p className=" font-bold "> 3. DataBase management</p>
              <p className=" font-bold mt-2"> 3. React developer</p>
              <p></p>
            </div>
          </div>
          <div className="relative">
            <img src="https://i.ibb.co.com/zGJ2YYC/Rectangle-188.png" alt="" />
            <div className="absolute lg:top-16 md:top-9 top-10 text-white lg:left-10 left-10">
              <button
                className="text-5xl font-bold px-3 text-center py-6 rounded-lg text-white bg-[#49BBBD]
  "
              >
                10%
              </button>
              <h3 className="lg:text-3xl text-3xl md:text-xl font-bold mt-5">CSE Engineering</h3>
              <p className="mt-2 font-bold "> 1. Programming Languages</p>
              <p className=" font-bold my-2"> 2. Networking</p>
              <p className=" font-bold "> 3. DataBase management</p>
              <p className=" font-bold mt-2"> 3. Machine Learning and AI</p>
              <p></p>
            </div>
          </div>
          <div className="relative">
            <img src="https://i.ibb.co.com/yy221sb/Rectangle-189.png" alt="" />
            <div className="absolute lg:top-16 md:top-9 top-10 text-white lg:left-10 left-10">
              <button
                className="text-5xl font-bold px-3 text-center py-6 rounded-lg text-white bg-[#49BBBD]
  "
              >
                50%
              </button>
              <h3 className="lg:text-3xl text-3xl md:text-xl font-bold mt-5">Software Engineering</h3>
              <p className="mt-2 font-bold "> 1. Security Best Practices</p>
              <p className=" font-bold my-2"> 2. Software Development Lifecycle (SDLC)</p>
              <p className=" font-bold "> 3. DataBase management</p>
              <p className=" font-bold mt-2"> 3. Version Control Systems</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OfferCourse;
  