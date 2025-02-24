import { RiCodeAiFill } from "react-icons/ri";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import "./header.css"

import { useEffect, useState } from "react";


function Header() {

  const [isOpen, setisopen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsScrolled(true); // If scrolled more than 50px, apply blur
       } else {
         setIsScrolled(false); // Remove blur when scrolled back to top
       }
     };

     window.addEventListener("scroll", handleScroll);

     // Clean up the event listener when the component is unmounted
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);


  const Nav_menu = {
    Home:{
      path:'/'
    },
    Projects:{
      path:'/projects'
    },
    About:{ 
      path:'/about'
    },
    Contact:{
      path:'/contact'
    },
  }

  return (
    <>
      <header
        className={`items-center  text-white z-50 bg-transparent  w-[100%] ${
          isScrolled ? "backdrop-blur-lg" : "" // Apply blur when scrolled
        }`}
      >
        <div className="navigation flex items-center justify-between lg:">
          {/* Logo Part */}

          <div className="logo flex p-6 ml-6 items-center gap-2">
            <RiCodeAiFill size={40} />
            <h1 className="text-2xl font-semibold ">Shatadhru</h1>
          </div>

          {/* Nav Drawer */}

          <div className="nav_drawer">
            <MdMenuOpen
              className="mr-[20px] lg:hidden"
              size={30}
              onClick={() => setisopen(!isOpen)}
            />
          </div>

          {/* Large Screen Menu */}

          <nav className=" hidden lg:justify-center lg:flex lg:items-center ">
            <ul className="mr-50">
              {Object.keys(Nav_menu).map((items, key) => {
                return (
                  <a
                    key={key}
                    href={Nav_menu[items].path}
                    className="lg:py-4 lg:px-6 lg:text-sm lg:font-medium lg:pl-2 lg:pr-2 lg:pt-2 lg:pb-2 lg:gap-2 lg:rounded lg:mr-6 hover:transition-all hover:ease-in-out hover:duration-200 lg:hover:text-white lg:hover:bg-pink-500
"
                  >
                    {items}
                  </a>
                );
              })}
            </ul>

            <div className="login_signup_box lg:flex lg:items-center lg:gap-2 mr-10 ">
              <div className="sign_in_group lg:flex lg:gap-2 ">
                <FaRegUser size={20} />
                <a href="/login" className="hover:text-pink-500">
                  Sign in
                </a>
              </div>

              <button className="lg:rounded-3xl lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 lg:ml-6 lg:bg-[#FF00AA] text-white hover:bg-pink-500 hover:duration-200 hover:ease-in-out">
                Sign Up
              </button>
            </div>
          </nav>
        </div>

        <div
          className={` ${
            isOpen ? "hidden" : ""
          } nav_drawer absolute bg-white h-[100vh] z-1000 text-black w-[200px] shadow top-0 right-0 transition-all ease-in-out duration-500 lg:hidden`}
        >
          <IoClose
            className="absolute top-1 right-0 m-6"
            onClick={() => {
              setisopen(!isOpen);
            }}
            size={30}
          />

          <ul className="flex flex-col justify-center items-center gap-2 mt-40">
            {Object.keys(Nav_menu).map((items, key) => {
              return (
                <a
                  key={key}
                  href={Nav_menu[items].path}
                  className="lg:py-4 lg:px-6 lg:text-sm lg:font-medium lg:pl-2 lg:pr-2 lg:pt-2 lg:pb-2  hover:text-pink-500 lg:gap-2 lg:rounded lg:mr-6 hover:transition-all hover:ease-in-out hover:duration-200 lg:hover:text-white lg:hover:bg-pink-500
"
                >
                  {items}
                </a>
              );
            })}

            <div className="login_signup_box flex flex-col items-center justify-center mt-20 gap-2 ">
              <div className="sign_in_group ml-4 flex flex-col justify-center items-center gap-2">
                <FaRegUser size={16} className="" />
                <a href="/login" className="hover:text-pink-500">
                  Sign in
                </a>
              </div>

              <button className="rounded-3xl pl-6 pr-6 pt-2 pb-2 ml-6 bg-[#FF00AA] text-white hover:bg-pink-500 hover:duration-200 hover:ease-in-out">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
