import { useForm } from "react-hook-form";
import { useUser } from "../../../Hooks/api/useUser";

const countries = [
  "Select Country",
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

export default function SSLCommerceForm({ onSubmit }) {
  const {user} = useUser();
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

  return (
    <form className="space-y-8 py-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-8">
        <div className="flex gap-10 justify-between">
          {/* Name input */}
          <div className="space-y-2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user?.name}
              readOnly
              placeholder="Your name"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* Email input */}
          <div className="space-y-2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              readOnly
              placeholder="Your Email"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("email", { required: true })}
            />
          </div>
        </div>

        {/* country */}
        <div className="flex flex-col lg:flex-row xl:flex-row justify-between gap-4">
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="country">
              Select Country
            </label>
            <select
              placeholder="Select Country"
              name="country"
              {...register("country", { required: true })}
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            >
              {countries?.map((item, index) => (
                <option defaultValue={item[0]} key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.photoUrl && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* post code */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="postCode">
              Post code
            </label>
            <input
              type="number"
              name="postCode"
              id="postCode"
              placeholder="Post code"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("postCode", { required: true })}
            />
            {errors.postCode && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          {/* phone */}
          <div className="space-y-2 w-full lg:w-1/2 xl:w-1/2">
            <label className="text-[#5B5B5B] font-semibold" htmlFor="password">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="phone"
              className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>

        {/* address */}
        <div className="space-y-2 w-full">
          <label className="text-[#5B5B5B] font-semibold" htmlFor="password">
            Full Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Full Address"
            className="w-full px-6 py-3 border focus:outline-none focus:border-[#49BBBD] border-[#D9D9D9] placeholder:text-[#9D9B9B] placeholder:text-base placeholder:font-light outline-none rounded-xl"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <input
          className="bg-[#49BBBD] px-12 py-4 rounded-xl text-white cursor-pointer w-full"
          type="submit"
          value="Pay"
        />
      </div>
    </form>
  );
}
