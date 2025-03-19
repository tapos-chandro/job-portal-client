import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import usePageTitle from "../../components/usePageTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import JobCard from './../Home/JobCard';

const AllJobs = () => {

    usePageTitle('Jobs');


    const [jobs, setJobs] = useState([]);
    const axiosInstancePublic = useAxiosPublic()
    const [loading, setLoading] = useState(true)
    useEffect(() => {

      axiosInstancePublic.get('https://job-portal-server-delta-two.vercel.app/api/v1/jobs')
      .then(res => {
        setJobs(res.data)
        setLoading(false)
      })
      

    },[])

    if(loading){
      return <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-spinner text-error bg-blue-400 h-20 w-20"></span>
      </div>
    }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-8">This is all Jobs!</h1>
      <div  className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-20 ">
        {
          jobs?.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  );
};

export default AllJobs;
