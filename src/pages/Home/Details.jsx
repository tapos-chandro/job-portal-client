import { useEffect, useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { useParams } from "react-router";

const Details = () => {
  const [jobDetail, setJobDetail] = useState({});
  const [loading, setLoading] = useState(true)

  const { id } = useParams();
  console.log(jobDetail);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJobDetail(data)
        setLoading(false)
      });
  }, []);


  if(loading){
    return <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-error bg-blue-400 h-20 w-20"></span>
    </div>
  }


  return (
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white text-center">
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-full shadow-lg">
              <img
                src={jobDetail?.company_logo}
                alt="Company Logo"
                className="w-16 h-16"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-3">{jobDetail?.title}</h2>
          <span className="bg-white text-blue-600 px-3 py-1 text-xs font-semibold rounded-full mt-2 inline-block">
            {jobDetail?.category}
          </span>
        </div>

        {/* Body Section */}
        <div className="p-6">
          <div className="text-gray-600 text-sm flex items-center gap-1">
            <LuMapPin className="text-indigo-500" /> {jobDetail?.location} ( {jobDetail?.jobType} )
          </div>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
           {jobDetail?.description}
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-800">Requirements:</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {jobDetail.requirements?.map(requirement => <li key={requirement}>{requirement}</li>)}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-800">Responsibilities</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {jobDetail.responsibilities?.map(responsibilitie => <li key={responsibilitie}>{responsibilitie}</li>)}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-800">Salary:</p>
            <p className="text-gray-700 text-sm">{jobDetail?.salaryRange?.currency.toUpperCase()} {jobDetail?.salaryRange?.min} - {jobDetail?.salaryRange?.max}</p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Apply by:{jobDetail?.applicationDeadline}
          </div>
          <div className="flex justify-between items-center mt-5">
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-all py-2 rounded-xl font-medium">
              Apply Now
            </button>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mt-3 text-sm">
            {/* <Mail size={16} className="text-indigo-500" />{" "} */}
            {jobDetail?.hr_email}
          </div>
        </div>
      </div>
  );
};

export default Details;
