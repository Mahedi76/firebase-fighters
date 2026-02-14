import React, { useState } from "react";
import MyContainer from "../components/MyContainer";

const Email = () => {
  const [mail, setMail] = useState(false);

  const handleEmailSignin = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const phone = e.target.phone?.value;
    console.log(name, phone);
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      <MyContainer>
        <div>
          {/* Left side */}
          <div>
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>

          </div>
          {/* right side */}
          <div>
             <form >
                <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                Sign In
              </h2>
              <div>
     <label className="block text-sm mb-1">Email</label>
                <input
                  type="text"
                  name="name"
                //   ref={emailRef}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                 <label className="block text-sm mb-1">Password</label>
                <input
                  type={mail ? "name" : "number"}
                  name="number"
                  placeholder="01..."
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
             </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Email;
