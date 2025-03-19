import React from 'react';

const MyApplicationCart = ({applyJob}) => {
    const {title,email, company_logo,status, location}= applyJob;
    return (

        <ul className="list bg-base-100 rounded-box shadow-md ">

          <li className="list-row items-center">
            <div>
              <img
                className="size-10 rounded-box"
                src={company_logo}
              />
            </div>
            <div>
              <div>{title}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {location}
              </div>
            </div>
            <div>
                {email}
            </div>
          <div>
          <button className="btn  bg-transparent border-none px-1">
            {status}
            </button>
          </div>
          </li>

        
        </ul>
    );
};

export default MyApplicationCart;