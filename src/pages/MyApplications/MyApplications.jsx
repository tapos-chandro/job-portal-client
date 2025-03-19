import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import usePrivetAxios from "../../hooks/usePrivetAxios";

const MyApplications = () => {
  const { user } = useContext(AuthContext);

  const axiosInstance = usePrivetAxios()

  const [myApply, setMyApply] = useState([]);


  useEffect(() => {
    // fetch(`http://localhost:5000/api/v1/my-apply?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyApply(data));

    //   axios(`http://localhost:5000/api/v1/my-apply?email=${user?.email}`, {
    //     withCredentials: true
    //   })
    axiosInstance(`/api/v1/my-apply?email=${user?.email}`)
    .then(res => setMyApply(res.data))
    
  }, []);

  console.log(myApply)

  return (
    <div>
      <h1>This is my Applications</h1>
      <div>
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>

          <li className="list-row">
            <div>
              <img
                className="size-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div>
              <div>Dio Lupa</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                Remaining Reason
              </div>
            </div>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>

        
        </ul>
      </div>
    </div>
  );
};

export default MyApplications;
