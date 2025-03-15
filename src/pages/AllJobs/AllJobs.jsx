import { useEffect } from "react";
import { Helmet } from "react-helmet";
import usePageTitle from "../../components/usePageTitle";

const AllJobs = () => {

    usePageTitle('Jobs')

  return (
    <div>
      <h1>This is all Jobs!</h1>
    </div>
  );
};

export default AllJobs;
