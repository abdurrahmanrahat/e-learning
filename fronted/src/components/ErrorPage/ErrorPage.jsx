import { Link } from "react-router-dom";
import "../../css/errorPage.css";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center error-page">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-4">404 Page Not Found</h2>
        <h3 className="text-2xl mb-3">This URL is not correct</h3>
        <Link to="/">
          <button className="text-[16px] font-medium px-4 py-3 bg-[#49BBBD] text-white rounded hover:bg-emerald-500 transition-colors duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
