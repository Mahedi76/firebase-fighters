import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { GridLoader, RingLoader } from "react-spinners";
// import MyLink from "./MyLink";
// import MyLink from "./MyLink";

const Navbar = () => {

  const {user, signOutUserFunc, setUser, loading, setLoading} = useContext(AuthContext)
  console.log(user);


    const handleSignout = () => {
     signOutUserFunc()
     .then(() => {
        toast.success("Signout successful");
        setUser(null);
     })
     .catch((e) => {
      toast.error(e.message)
     })
  };

console.log(loading);

  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      {/* <div className="flex items-center justify-between"> */}

         <MyContainer className="flex items-center justify-between">

        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"} className="">Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"} className="">About us</MyLink>
          </li>
            { user &&( <li>
                <MyLink to={"/profile"} className="">Profile</MyLink>
            </li>)
            }
           {/* <li>
                <MyLink to={"/email"} className="">Email</MyLink>
            </li> */}
            
        </ul>

        { loading ? <RingLoader color="#e74c3c"/> :
           user ? (
              <div className="text-center space-y-3">
                

                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                <img  className="h-[40px] w-[40px] rounded-full mx-auto" 
                src={user?.photoURL || "https://via.placeholder.com/88"} 
                 
                alt="" />
              </button>

              <div className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                
                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-black/80 mt-2 mb-2 font-bold">{user?.email}</p>

                <button onClick={handleSignout} className="my-btn">Sign Out</button>

              </div>

             </div>
           ) : (
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                <Link to={"/signin"}>Sign in</Link>
              </button>
              )
        }

          
            </MyContainer>
        {/* </div> */}
    </div>
  );
};

export default Navbar;