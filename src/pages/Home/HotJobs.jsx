import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const HotJobs = () => {

    const [jobs, setJobs] = useState([]);
    const axiosInstancePublic = useAxiosPublic();

    useEffect(() => {
        // fetch('https://job-portal-server-delta-two.vercel.app/api/v1/jobs?limit=6')
        // .then(res => res.json())
        // .then(data => setJobs(data))
            
        axiosInstancePublic.get('/api/v1/jobs?digit=6')
        .then(res => setJobs(res.data))



    },[])

    console.log(jobs)

    return (
        <div>
            <h1 className="text-center font-bold text-4xl py-8">The Hot Jobs</h1>
           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-20 ">
            {
                jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;