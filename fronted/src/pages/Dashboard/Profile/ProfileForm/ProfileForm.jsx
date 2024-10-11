import { useForm } from "react-hook-form";
import { FaRegSave } from "react-icons/fa";
import useUser from "../../../../Hooks/api/useUser";
import Button from "../../../../components/Ui/Button";
import RichTextEditor from "../../../../components/Ui/RichTextEditor";

const countries = [
  "Bangladesh",
  "India",
  "Pakistan",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Japan",
  "Brazil",
];

export default function ProfileForm({
  setBioDescription,
  setIntro,
  handleProfileEdit,
}) {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
  });

  // handle text editor
  const handleEditorChange = (content) => {
    setBioDescription(content);
    setIntro(content);
  };

  return (
    <form
      onSubmit={handleSubmit(handleProfileEdit)}
      className="space-y-8 py-10 w-11/12"
    >
      <div className="space-y-8">
        {/* first row */}
        <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
          {/* name  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="name">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              placeholder="Your Name"
              value={user?.name}
              readOnly
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* email  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={user?.email}
              readOnly
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        {/* second row */}
        <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
          {/* phone  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              defaultValue={user?.phone || "Update your number"}
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* Gender  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold">Gender</label>
            <select
              name="gender"
              {...register("gender", { required: true })}
              className="w-full px-6 py-3 border focus:outline-none text-[#000] focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            >
              {/* Placeholder option */}
              <option value="" disabled selected>
                Select Gender
              </option>
              {["Others", "Male", "Female"].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.gender && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* Nationality */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="country">
              Nationality
            </label>
            <select
              name="nationality"
              {...register("nationality", { required: true })}
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            >
              <option value="" disabled selected>
                Select Country
              </option>
              {countries?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.nationality && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        {/* Address  */}
        <div className="space-y-2 w-full">
          <label className="text-[#5B5B5B] font-semibold">Address</label>
          <input
            type="text"
            placeholder="Your Address"
            name="address"
            className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>

        {/* social links */}
        <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
          {/* github  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="title">
              Github
            </label>
            <input
              type="text"
              name="github"
              placeholder="Your Github Link"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("github", { required: true })}
            />
            {errors.github && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* linkedin  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold">Linkedin</label>
            <input
              type="text"
              placeholder="Your Linkedin Link"
              name="linkedin"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("linkedin", { required: true })}
            />
            {errors.linkedin && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row xl:flex-row gap-4 items-center space-y-6 lg:space-y-0 xl:space-y-0">
          {/* facebook  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold">FaceBook</label>
            <input
              type="text"
              placeholder="Your Facebook Link"
              name="facebook"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("facebook", { required: true })}
            />
            {errors.facebook && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          {/* Portfolio  */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="title">
              Portfolio
            </label>
            <input
              type="text"
              name="portfolio"
              placeholder="Your Portfolio Link"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("portfolio", { required: true })}
            />
            {errors.portfolio && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>

        {/* intro */}
        <div className="space-y-2">
          <label className="text-[#5B5B5B] font-semibold">
            Intro Description
          </label>
          <RichTextEditor
            hight={200}
            initialValue={"bioDescription"}
            handleEditorChange={handleEditorChange}
          />
          {errors.intro && (
            <span className="text-red-600">{errors.intro.message}</span>
          )}
        </div>

        {/* description */}
        <div className="space-y-2">
          <label className="text-[#5B5B5B] font-semibold">
            Bio Description
          </label>
          <RichTextEditor
            hight={250}
            initialValue={"bioDescription"}
            handleEditorChange={handleEditorChange}
          />

          {errors.bioDescription && (
            <span className="text-red-600">
              {errors.bioDescription.message}
            </span>
          )}
        </div>

        {/* button */}
        <div className="space-y-2 flex justify-center lg:justify-start xl:justify-start">
          <Button bgBtn={true} type={"submit"}>
            <span>
              <FaRegSave />
            </span>
            <span>Save Info</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
