import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import { motion } from "motion/react";

const Banner = () => {
  const transition1 = {
    duration: 8,
    delay: 1,
    loop: Infinity,
    repeat: Infinity,
  };
  const transition2 = {
    duration: 8,
    delay: 1,
    loop: Infinity,
    repeat: Infinity,
  };

  return (
    <div className="hero">
      <div className="w-full flex items-center flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 w-full hidden lg:block">
          <motion.img
            src={banner1}
            className=" lg:max-w-sm rounded-lg shadow-2xl"
            alt="Banner"
            animate={{ y: [100, 150, 100] }}
            transition={transition2}
          />
          <motion.img
            src={banner2}
            className=" rounded-lg lg:max-w-sm  shadow-2xl"
            alt="Banner"
            animate={{ x: [150, 200, 150] }}
            transition={transition1}
          />
          <div className="lg:hidden block">
            <motion.img
              src={banner1}
              className=" lg:max-w-sm rounded-lg shadow-2xl"
              alt="Banner"
              animate={{ y: [0, 50, 0] }}
              transition={transition2}
            />
            <motion.img
              src={banner2}
              className=" rounded-lg lg:max-w-sm  shadow-2xl"
              alt="Banner"
              animate={{ x: [0, 60, 0] }}
              transition={transition1}
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Get Your New Job</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
