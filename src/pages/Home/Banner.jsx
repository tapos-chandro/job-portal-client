import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br rounded-2xl from-[#F9FAFB] to-[#E0F2FE] py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6">
        
        {/* Left Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-6xl font-extrabold text-[#2563EB] leading-tight"
          >
            Find Your <span className="text-[#FACC15]">Dream Job</span> Today!
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-gray-700 text-lg"
          >
            Explore thousands of job opportunities and land the perfect role for your career growth. Start applying now!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-[#FACC15] hover:text-[#2563EB] transition-all"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            <img
              src={banner1}
              className="w-96 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
              alt="Job Search"
            />
            <motion.img
              src={banner2}
              className="w-64 h-64 object-cover rounded-xl shadow-lg absolute -bottom-6 right-6 border-2 border-gray-300"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              alt="Success"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
