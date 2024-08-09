import React from "react";
import templelogo from "../assets/templelogo.png";

function Footer() {
  return (
    <footer className="px-[10%] z-50 flex flex-row justify-between items-center w-screen backdrop-blur-sm">
      <div className="w-40 h-32 flex flex-1 flex-row gap-4 items-center cursor-pointer">
        <img
          src={templelogo}
          alt="templelogo"
          className="w-40 h-32 drop-shadow-[0_80px_100px_rgba(0,0,0,1)]"
        />
        <div>A258, Chhatarpur Enclave Phase 2 ,Chhatarpur Delhi , India</div>
      </div>
      <div className="flex flex-col flex-1">
        <button>Home</button>
        <button>Book a Pooja</button>
        <button>About us</button>
        <button>Blog</button>
        <button>Account</button>
      </div>
    </footer>
  );
}

export default Footer;
