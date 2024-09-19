const Footer = () => {
  return (
    <div className="w-full text-white bg-[#252641] text-center space-y-10 p-10">
      <div className="flex items-center justify-center">
        {/* logo */}
        <img
          src="https://i.ibb.co.com/PQ0nLNs/Group-115-1.png"
          alt=""
          width="250"
          height="250"
        />
      </div>
      <div>
        {/* form */}
        <p className="pb-3">Subscribe to get our Newsletter</p>
        <form>
          <input
            type="email"
            className="rounded-full py-1 px-5 mr-5 bg-transparent border"
            placeholder="your email"
            name=""
            id=""
          />
          <input
            type="submit"
            className="rounded-full py-2 px-5 mr-5 bg-cyan-400"
            value="Subscribe"
          />
        </form>
      </div>
      <div>
        {/* menu */}
        <div className="flex items-center justify-center text-center">
          <p className="px-3">Career</p>
          <p className="border-l-2 px-3">Privacy Policy</p>
          <p className="border-l-2 px-3">Terms & Conditions</p>
        </div>
        <p className="mt-3">© 2021 Class Technologies Inc. </p>
      </div>
    </div>
  );
};

export default Footer;
