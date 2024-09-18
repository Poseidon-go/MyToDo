/* eslint-disable no-unused-vars */
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaEye, FaLowVision } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../FireBase/config.js";
// import "./index.css";


function Login() {
  const [email, setEmail] = useState("");
  const [avt, setAvt] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let navigate = useNavigate();

  const handleLoginGoogle = () => {
    signInWithPopup(auth, provider).then(data => {
      setEmail(data.user.email);
      localStorage.setItem("email", data.user.email);
      auth.onAuthStateChanged(user => {
        if (user) {
          const { displayName, email, uid, photoURL,  } = user;
          localStorage.setItem("photoURL", photoURL);
          localStorage.setItem("name", displayName);
          navigate("/home");
        } else {
          navigate("/");
        }
      })
    })

  }

  useEffect(() => {
    setEmail(localStorage.getItem("email"))
  })

  function handleHiddenPass() {
    setShowPassword(!showPassword);
  }

  function handleHiddenPass2() {
    setShowConfirmPassword(!showConfirmPassword);
  }
  return (
    <div id="Login" className="flex p-[20px] sm:p-[50px] ">
      <div className="sign-up w-full sm:w-[50%]">
        <div id="login-logo" className="flex items-center laptop:mb-8">
          <i className='bx bx-list-check text-[50px] bg-[#00189d] text-[#fff] rounded-[10px] mr-[10px]'></i>
          <span className="text-2xl inline-block font-bold">TodoToDay</span>
        </div>
        <div id="login-heading">
          <h1 className="text-3xl mb-9">Sign Up</h1>
        </div>
        <div id="login-auto" className="flex flex-col">

          <button onClick={handleLoginGoogle} className="flex items-center justify-center w-full py-[10px] border border-[#dfdcdc] rounded-[5px] mb-8">
            <i className='bx bxl-google mr-2 text-[#00189d]'></i>
            <span className="text-[#00189d]">Continue with Google</span>
          </button>
          <button className="flex items-center justify-center w-full py-[10px] border border-[#dfdcdc] rounded-[5px] mb-8">
            <i className='bx bxl-facebook-circle mr-2 text-[#00189d]'></i>
            <span className="text-[#00189d]">Continue with Facebook</span>
          </button>

        </div>
        <div id="login-line" className="w-full mb-[30px] border-[1px] border-[#00189d] relative">
          <span className="absolute left-[47%] translate-y-[-50%] bg-[#fff] p-[10px] font-bold">OR</span>
        </div>

        <div id="login-manu">
          <div className="mb-8 relative">
            <input type="text" placeholder="poseidon@gmail.com" className="invalid w-full py-[12px] px-[10px] outline-none border border-[#dfdcdc] rounded-[5px]" />
            <span className="absolute top-[-30%] left-2 bg-[#fff] p-[2px]">Email</span>
          </div>
          <div className="mb-8 relative">
            <div >
              <input id="pass1" type={showPassword ? "text" : "password"} placeholder="********" className="relative w-full py-[12px] px-[10px] outline-none border border-[#dfdcdc] rounded-[5px]" />
              <span className="hidePass absolute right-[12px] top-0 translate-y-[18px] cursor-pointer " onClick={handleHiddenPass}>
                {showPassword ? <FaEye /> : <FaLowVision />}
              </span>
            </div>
            <span className="absolute top-[-30%] left-2 bg-[#fff] p-[2px]">Set Password</span>
          </div>
          <div className="mb-8 relative">
            <div>
              <input id="pass2" type={showConfirmPassword ? "text" : "password"} placeholder="********" className=" w-full py-[12px] px-[10px] outline-none border border-[#dfdcdc] rounded-[5px]" />
              <span className="hidePass absolute right-[12px] top-0 translate-y-[18px] cursor-pointer " onClick={handleHiddenPass2}>
                {showConfirmPassword ? <FaEye /> : <FaLowVision />}
              </span>
            </div>
            <span className="absolute top-[-30%] left-2 bg-[#fff] p-[2px]">Confirm Password</span>
          </div>
          <button className="flex items-center justify-center w-full py-[10px] border bg-[#00189d] rounded-[5px]">
            <span className="text-[#fff]">Sign up with Email</span>
          </button>
          <div id="login-ask" className="mt-1 text-center">
            <button>Already have an account? <a className="underline text-[#00189d] font-semibold">Login</a></button>
          </div>
        </div>
      </div>
      <div id="resImage" className="hidden sm:block sm:translate-y-[25%] sm:translate-x-[25%]">
        <img className="w-0 h-0 sm:w-[400px] sm:h-[400px]" src="https://cdn.dribbble.com/userupload/7508016/file/original-6d38ac70c2968f31ca4697f58c281591.jpg?resize=1200x874" alt="Display-image" />
      </div>
    </div>
  );

}


export default Login;