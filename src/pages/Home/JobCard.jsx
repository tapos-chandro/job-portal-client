import { IoLocation } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";

const JobCard = ({ job }) => {
  const {
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
    <div className="bg-[#F3F4F6] shadow-lg rounded-xl overflow-hidden border border-gray-300 transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white">
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
      <div className="p-5 space-y-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="flex items-center gap-2 text-gray-600 font-medium">
          <TiShoppingBag className="text-[#06B6D4]" /> {jobType}
        </p>
        <p className="text-gray-500 text-sm">{description}</p>

        {/* Responsibilities */}
        {responsibilities?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {responsibilities.map((responsibility, index) => (
              <span 
                key={index} 
                className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border border-[#1E40AF]">
                {responsibility}
              </span>
            ))}
          </div>
        )}

        {/* Footer Section */}
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <h2 className="text-lg font-semibold text-[#1E40AF]">
            ${salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}
          </h2>
          <button className="bg-[#06B6D4] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#9333EA] transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
