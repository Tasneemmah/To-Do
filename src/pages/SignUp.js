import React, { useState, useEffect,useRef  } from "react";

import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import background from "../images/login.png";
// export const UserSign=createContext();
function SignUp() {
  const [info, setInfo] = useState([]);
  const [userSignUp, setUserSignUp] = useState(false);
  const [googleUser, setGoogleUser] = useState({});
  const [pemail, setpEmail] = useState("pvalidate");
  const [pname, setpName] = useState("pvalidate");
  const [ppassword, setPpassword] = useState("pvalidate");
  const navigate = useNavigate();
  const name=useRef();
  const email=useRef();
  const password=useRef();
  function UserValidate(string) {
    let pattern = /\s/g;
    return !pattern.test(string);
  }
  function PassWordValidate(string) {
    let pattern =
      /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    return pattern.test(string);
  }
  function emailValidate(string) {
    let pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
    return pattern.test(string);
  }

  function handelCallBack(response) {
    // {theme:"outline",size:"large"}
    // console.log("test",response.credential)
    let userObject = jwt_decode(response.credential);
    // console.log("test",userObject)
    setGoogleUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    navigate("/");
  }


  const [saveToLocal, setLocal] = useState([info]);
  useEffect(() => {
   
    if (localStorage.name!=null) {
      setInfo(JSON.parse(localStorage.getItem("name")))
    }
  }, []);

 

  

  function handelSubmit(e) {
    
    e.preventDefault();
    console.log(name.current.value,email.current.value,password.current.value)
    if (!emailValidate(email.current.value)) {
      setpEmail("pWrong");
    }
    if (!UserValidate(name.current.value)) {
      setpName("pWrong");
    }
    if (!PassWordValidate(password.current.value)) {
      setPpassword("pWrong");
    }
    if (
      emailValidate(email.current.value) &&
      UserValidate(name.current.value) &&
      PassWordValidate(password.current.value)
      ) {
      
        const user =[name.current.value,email.current.value,password.current.value];
        const data = [...info,user];
      setInfo(data);
      localStorage.setItem("name", JSON.stringify(data));
      alert("welcome");
      console.log(info)

      // if there is item in cart navigate to checklist
      // else to home
      // navigate("/");
    }
  }


  function handelSignOut(e) {
    setGoogleUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  // console.log(info)
  return (
    <div>
      {" "}
      <section className="flex flex-col md:flex-row h-screen items-center mt-[1rem]">
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              sign up here
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">full Name</label>
                <input
                  type="text"
                  name="name"
                  ref={name}
                  id=""
                  placeholder="full name "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300 focus:amber-300 focus:outline-none   focus:bg-white"
                 
                />
                <p className={pname}>you're name should not contain spaces</p>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">email</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  ref={email}
                  placeholder="Enter your email "
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none"
                  required
                
                />
                <p className={pemail}>you entered a wrong email</p>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  ref={password}
                  id=""
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-amber-300
                  focus:bg-white focus:outline-none"
                  required
                  
                  
                />
                <p className={ppassword}>
                  your pass word should be at least 8 characters,special
                  characters,small and big letters{" "}
                </p>
              </div>
         

              <button
                type="submit"
                className="w-full block bg-neutral-900  hover:bg-neutral-900 focus:bg-neutral-900 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 signupBtn"
                onClick={(e) => {
                  handelSubmit(e);
                }}
              >
                sign up{" "}
              </button>

              <div id="signInDiv"></div>
              {Object.keys(googleUser).length !== 0 && (
                <button onClick={(e) => handelSignOut(e)}>Sign out</button>
              )}
              {googleUser && (
                <div>
                  <img src={googleUser.picture} />
                </div>
              )}
            </form>
            <p className="mt-8">
              do you have account?{" "}
              <a className="text-blue-500 hover:text-blue-700 font-semibold">
                <Link to="/signin">log in here</Link>
              </a>
            </p>
          </div>
        </div>
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src={background} alt="" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}

export default SignUp;