import { Link } from "react-router";

import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../components/MyContainer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useState } from "react";


const Signup = () => {

    const [show, setShow] = useState(false);


    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email?.value;
        const password = e.target.password?.value;

        console.log("signup function entered",  {email, password});
        // console.log(password.length);
        // if(password.length < 6) {
        //     toast.error("Password should be at least 6 digit");
        //     return;
        // }
        const regExp =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|\\:;"'<>,./]).{8,}$/;
          console.log(regExp.test(password));
          if(!regExp.test(password)){
            toast.error(
                "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
            );
         return;
       
  }

    

        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res);
            toast.success("Signup successful");
        }).catch((e) => {
            console.log(e);
            console.log(e.code);
            if(e.code == "auth/email-already-in-use"){
              toast.error("User already exist in database")
            }else if(e.code == "auth/weak-password"){
              toast.error("Bhai tmk at least 6 digit er pass dite hbe")
            }
             else if (e.code === "auth/weak-password") {
              toast.error("Bhai, tmk at least 6 digit er pass dite hbe");
            } else if (e.code === "auth/invalid-email") {
              toast.error("Email ta thik moto den");
            } else if (e.code === "auth/operation-not-allowed") {
              toast.error("Email/password signup disabled");
            } else if (e.code === "auth/user-disabled") {
              toast.error("Ei user ta disabled");
            } else if (e.code === "auth/user-not-found") {
              toast.error("User ta database e nai");
            } else if (e.code === "auth/wrong-password") {
              toast.error("Password ta thik nai");
            } else if (e.code === "auth/too-many-requests") {
              toast.error("Besi try korsen, porer try korun poroborti te");
            } else if (e.code === "auth/network-request-failed") {
              toast.error("Network error, connection check korun");
            } else if (e.code === "auth/popup-blocked") {
              toast.error("Popup blocked, allow korun");
            } else if (e.code === "auth/popup-closed-by-user") {
              toast.error("Popup user bondho kore dishe");
            } else if (e.code === "auth/account-exists-with-different-credential") {
              toast.error("Ei email already use hocche onno login method diye");
            } else if (e.code === "auth/invalid-credential") {
              toast.error("Credential invalid");
            }
            else{
              toast.error(e.message);
            }
        });

    }

  return (
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form  onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mahedi Hasan"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-9 cursor-pointer z-50">
                  {  show ?  <FaEye></FaEye> : <IoEyeOff></IoEyeOff>} 
                </span>
              </div>

              <button
               type="submit"
               className="my-btn">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                    <Link
                    to="/signin"
                    className="text-pink-300 hover:text-white font-medium underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;