import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import usePrivetAxios from "../../hooks/usePrivetAxios";
import MyApplicationCart from "./MyApplicationCart";
import usePageTitle from "../../components/usePageTitle";

const MyApplications = () => {
  const { user } = useContext(AuthContext);
  usePageTitle("My Applications");
  const axiosInstance = usePrivetAxios();
  const [loading, setLoading] = useState(true)
  

  const [myApply, setMyApply] = useState([]);

  useEffect(() => {
    axiosInstance(`/api/v1/my-apply?email=${user?.email}`).then((res) =>
    {
      setMyApply(res.data),
      setLoading(false)
    }
    );
  }, []);

  if(loading){
    return <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-error bg-blue-400 h-20 w-20"></span>
    </div>
  }
  return (
    <>
      <h1 className="text-center font-bold">My Apply jobs list</h1>
      <div className="flex flex-col gap-2">
        {myApply.map((applyJob) => (
          <MyApplicationCart
            applyJob={applyJob}
            key={applyJob._id}
          ></MyApplicationCart>
        ))}
      </div>
    </>
  );
};

export default MyApplications;
