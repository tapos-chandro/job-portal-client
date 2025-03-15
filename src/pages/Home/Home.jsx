import { Helmet } from "react-helmet";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import usePageTitle from './../../components/usePageTitle';

const Home = () => {



    usePageTitle('Job Portal')



  return (
    <div>

      <Banner></Banner>
      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;
