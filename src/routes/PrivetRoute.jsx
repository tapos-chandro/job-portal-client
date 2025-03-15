import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)




    if(user){
        return children
    }

    
    if(loading){
        return <div className="w-full h-screen flex justify-center items-center">
            <span className="loading loading-spinner text-error bg-blue-400 h-20 w-20"></span>
        </div>
      }

    return <Navigate to={'/login'} />
};

export default PrivetRoute;