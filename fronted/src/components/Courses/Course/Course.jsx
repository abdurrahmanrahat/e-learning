import { Link } from "react-router-dom";

const Course = ({ course }) => {
      const {
            title,
            image,
            authorName,
            authorImg,
            price,
            courseDuration,
            description,
            _id,
      } = course;
      return (
            <div className="">
                  <Link to={`/courseDetails/${_id}`}>
                        <div
                              className="overflow-hidden bg-[#FFFFFF]
   rounded-[20px] shadow-xl text-slate-500 shadow-slate-200 h-[600px] p-5 border"
                        >
                              {/* <!--  Image --> */}
                              <figure>
                                    <img
                                          src={image}
                                          alt="card image"
                                          className="aspect-video w-full rounded-[20px] h-[238px]"
                                    />
                              </figure>
                              {/* <!-- Body--> */}
                              <div className="p-6">
                                    <header>
                                          <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                      <img
                                                            src="https://i.ibb.co.com/jMcqBLR/Group-259.png"
                                                            alt=""
                                                      />
                                                      <p
                                                            className="text-[#696984] text-[14px] font-semibold
  "
                                                      >
                                                            Design
                                                      </p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                      <img src="https://i.ibb.co.com/mHZSdfz/image.png" alt="" />
                                                      <p
                                                            className="text-[#696984] text-[14px] font-semibold
  "
                                                      >
                                                            {courseDuration}
                                                      </p>
                                                </div>
                                          </div>
                                          <h3 className="lg:text-[24px] md:text-[24px] text-[20px] mb-4 font-bold text-slate-700">
                                                {title}
                                          </h3>
                                          <p className="text-[18px] text-[#696984]">{description}</p>
                                          <div className="mt-10 flex items-center justify-between ">
                                                <div className="flex items-center gap-3 ">
                                                      <img
                                                            className="w-[50px] h-[50px] rounded-full"
                                                            src={authorImg}
                                                            alt=""
                                                      />
                                                      <h2 className="text-black font-bold">{authorName}</h2>
                                                </div>
                                                <div className="flex items-center gap-2 ">
                                                      <img src="https://i.ibb.co.com/1v8H6d7/100.png" alt="" />
                                                      <h2
                                                            className="text-[#49BBBD]
   text-xl font-bold"
                                                      >
                                                            ${price}
                                                      </h2>
                                                </div>
                                          </div>
                                    </header>
                              </div>
                        </div>
                  </Link>
            </div>
      );
};

export default Course;
