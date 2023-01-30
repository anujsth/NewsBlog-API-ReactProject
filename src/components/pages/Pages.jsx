import React from "react";
import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <div className=" flex mt-12">
        <div className="mr-6 cursor-pointer ">
          <Link to="/">
            <h2 className="hover:bg-slate-300 rounded-full px-2 py-1  transition-all">
              HOME
            </h2>
          </Link>
        </div>
        <div className="mr-6 cursor-pointer">
          <Link to="/politics">
            <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
              LATEST NEWS
            </h2>
          </Link>
        </div>
        <div className="mr-6 cursor-pointer ">
          <Link to="/categories">
            <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
              CATEGORIES
            </h2>
          </Link>
        </div>

        <div className="mr-6 cursor-pointer">
          <Link to="/business">
            <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
              BUSINESS
            </h2>
          </Link>
        </div>
        <div className="mr-6 cursor-pointer">
          <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
            HEALTH
          </h2>
        </div>
        <div className="mr-6 cursor-pointer">
          <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
            DESIGN
          </h2>
        </div>
        <div className="mr-6 cursor-pointer">
          <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
            SPORT
          </h2>{" "}
        </div>
        <div className="mr-6 cursor-pointer">
          <h2 className="hover:bg-slate-300 rounded-full px-2 py-1 transition-all">
            CONTACT
          </h2>
        </div>
      </div>
      <hr
        class="my-2 h-1 bg-gray-100 rounded border-2 md:my-4 dark:bg-gray-700 "
        width="100%"
      />
    </>
  );
};

export default Pages;
