import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full p-4 bg-slate-950">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-4 min-h-72 h-full">
          <div className=" col-span-3 lg:col-span-1  lg:border-r h-24 lg:h-auto flex  lg:justify-center items-center">
            <Link href={"/"} className="font-semibold text-xl text-white">
              Astacumalaka's <span className="text-red-500">Movie</span>
            </Link>
          </div>
          <div className="col-span-3 lg:col-span-2 flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-8 ">
              <div className="about-us col-span-3 lg:col-span-1">
                {" "}
                <h1 className="text-white text-xl font-semibold">About Us</h1>
                <p className="text-slate-300 mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam, illo!
                </p>
              </div>
              <div className="help  col-span-3 lg:col-span-1">
                <h1 className="text-white text-xl font-semibold">Help</h1>
                <ul className="mt-4">
                  <li className="text-slate-300 cursor-pointer">FAQs</li>
                  <li className="text-slate-300 cursor-pointer">Contact us</li>
                </ul>
              </div>
              <div className="Company  col-span-3 lg:col-span-1">
                <h1 className="text-white text-xl font-semibold">Compay</h1>
                <ul className="mt-4">
                  <li className="text-slate-300 cursor-pointer">
                    example123@gmail.com
                  </li>
                  <li className="text-slate-300 cursor-pointer">{`(1234) 1234-5678-90`}</li>
                </ul>
              </div>
            </div>
            <div className="disclamer">
              <h1 className="text-red-500 text-xl font-semibold">Disclaimer</h1>
              <p className="text-slate-200">
                All data in this website is API data from the TMDB, if you want
                to see more details please visit the official TMDB website{" "}
                <Link
                  rel="preconnect"
                  href={"https://www.themoviedb.org/"}
                  className="underline underline-offset-4 hover:text-sky-500"
                >
                  https://www.themoviedb.org/
                </Link>
                , I use this API only to improve my skills in learning to fetch
                data from the API
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-800"></div>
        <div className="w-full">
          <p className="text-slate-200 text-center">
            {" "}
            Copyright © Astacumalaka's Movie. All right reserved | created with
            ❤️ by{" "}
            <Link
              className="underline underline-offset-4 hover:text-sky-500"
              href={"https://github.com/JuliAstaa"}
            >
              juliasta
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
