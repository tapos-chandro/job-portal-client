import { IoLocation } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    description,
    company,
    responsibilities,
    salaryRange,
    company_logo,
  } = job;

  return (
    <div className="bg-[#F3F4F6] shadow-lg rounded-xl border border-gray-300 transition-all transform hover:scale-105 hover:shadow-2xl flex flex-col grow">
      {/* Header Section */}
      <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#1E40AF] rounded-t-lg to-[#06B6D4] text-white">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-14 h-14 rounded-lg object-cover border-2 border-white shadow-md"
        />
        <div>
          <h2 className="text-lg font-semibold">{company}</h2>
          <p className="flex items-center gap-1 text-gray-200">
            <IoLocation className="text-yellow-300" /> {location}
          </p>
        </div>
      </div>

      {/* Body Section */}
      <div className="p-5 space-y-4 flex-grow">
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="flex items-center gap-2 text-gray-600 font-medium">
            <TiShoppingBag className="text-[#06B6D4]" /> {jobType}
          </p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        {/* Responsibilities */}
        {responsibilities?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {responsibilities.map((responsibility, index) => (
              <span
                key={index}
                className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-[#1E40AF]"
              >
                {responsibility}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="flex items-end justify-between border-t border-gray-300 pt-4  p-4">
        <h2 className="text-lg font-semibold text-[#1E40AF]">
          ${salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}
        </h2>
        <Link to={`/details/${_id}`}>
          <button className="bg-[#06B6D4] text-white px-4 py-2 rounded-lg font-medium hover:cursor-pointer hover:bg-blue-600 transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
