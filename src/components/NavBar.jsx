import React from "react";
import templelogo from "../assets/templelogo.png";

function NavBar() {
  return (
    <div className="relative z-50 flex justify-center w-screen bg-[#87ceeb]">
      <nav className="fixed top-0 w-[80%] mt-10 flex flex-row justify-between items-center border border-4 rounded-full backdrop-blur-sm">
        <div className="w-40 h-20 flex flex-row gap-4 items-center cursor-pointer pl-8">
          <img
            src={templelogo}
            alt="templelogo"
            className="drop-shadow-[0_80px_100px_rgba(0,0,0,1)]"
          />
        </div>
        <div className="flex flex-row items-center gap-8 text-[#000000] pr-20 font-semibold">
          <button>Home</button>
          <button>Book a Pooja</button>
          <button>About us</button>
          <button>Blog</button>
          <button>Account</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
