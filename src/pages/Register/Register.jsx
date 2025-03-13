import Lottie from "lottie-react";
import registerLottie from "../../assets/signup.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Register = () => {

  const {createNewUser} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
        createNewUser(email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          Swal.fire({
            title: "Register successfully",
            icon: "success",
            draggable: true
          });
          navigate('/login')
          
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
      };
    
      return (
        <div className=" ">
          <div className="flex flex-col lg:flex-row-reverse items-center ">
            <div className="text-center lg:text-left md:w-1/2 ">
              <Lottie animationData={registerLottie} className=" lg:h-[40rem]"/>
            </div>
            <div className="card bg-base-100 md:w-1/2  h-full shadow-2xl">
              <form className="card-body"   onSubmit={handleSubmit}>
    
                <fieldset className="fieldset">
                
                    <label className="fieldset-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input w-full"
                      placeholder="Name"
                    />
                    <label className="fieldset-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                    <label className="fieldset-label">Password</label>
                    <input
                      type="password"
                      className="input w-full"
                      placeholder="Password"
                      name="password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4 w-full">Register</button>
                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Register;