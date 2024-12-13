import { FcCallback } from "react-icons/fc";
import { NavLink } from "react-router";
export default function Header() {
  return (
    <>
      <section className="w-[390px] mt-[30px] mb-[30px] lg:w-[1400px] mx-auto flex items-center justify-between gap-1 lg:gap-0">
        <div className=" flex items-center gap-[20px]">
          <NavLink to="/home" className="text-white text-[18px] font-thin">
            Inmaj Hossain
          </NavLink>

          <button className="bg-green-100 text-green-500 px-4  bg-opacity-10 border-[1px] border-green-400 relative rounded-md">
            {" "}
            <p className="bg-green-400 w-1 h-1 rounded-full absolute right-2 top-2"></p>
            Avialable
          </button>
        </div>
        <div className=" font-semi-bold text-white text-[15px] flex items-center justify-between gap-[10px]">
          {" "}
          <FcCallback className="size-[20px]" />
          <a href="tel:+8801515212670">+880 1515 212670</a>
        </div>
        <div className="flex items-center gap-[30px]">
          <NavLink
            to="/home"
            className="text-white font-thin text-[15px] hidden lg:block"
          >
            Home
          </NavLink>
          <NavLink
            to="/project"
            className="text-white font-thin text-[15px] hidden lg:block"
          >
            Project
          </NavLink>
          <NavLink
            to="/book"
            className="text-white font-thin text-[15px] hidden lg:block"
          >
            Book Concaltancy
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white font-thin text-[15px] hidden lg:block"
          >
            Contact
          </NavLink>
          <NavLink
            to="/query"
            className="text-white font-thin text-[15px] hidden lg:block"
          >
            Queries
          </NavLink>
          <button className="bg-amber-50 text-slate-100 px-2 py-1  bg-opacity-10 border-[1px] border-amber-300 relative rounded-md hidden lg:block">
            LET'S TALK
          </button>
        </div>
      </section>
    </>
  );
}
