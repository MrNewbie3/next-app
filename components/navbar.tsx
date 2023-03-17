import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

// const NavbarWrapper = (WrappedContent: React.FC) => {
//   function Navbar() {
//     return (
//       <nav className="flex flex-row bg-light-grey">
//         <WrappedContent />
//       </nav>
//     );
//   }
//   return Navbar;
// };

// export default NavbarWrapper;

function Navbar() {
  return (
    <nav className="flex flex-row justify-between  items-center h-24 drop-shadow-xl px-10 bg-light-grey">
      <img className="bg-sky-100 font-bold " src="./images/STAPA.png " height={29} width={85}></img>
      <div className="flex justify-between items-center font-medium gap-2">
        <img className="rounded-full h-10  w-10 object-cover " src="https://w7.pngwing.com/pngs/99/33/png-transparent-apple-logo-mac-os-heart-logo-computer-wallpaper.png" alt="" />
        <div className="flex gap-2 items-center">
          <div className="capitalize font-semibold text-base">nama ku persij</div>

          <div className="">
            <AiFillCaretDown />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
