import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const HotJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    console.log(jobs)

    return (
        <div>
            <h1 className="text-center font-bold text-4xl py-8">The Hot Jobs</h1>
           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-20 ">
            {
                jobs.map((job, index) => <JobCard key={index} job={job}></JobCard>)
            }
           </div>
        </div>
    );
};

export default HotJobs;