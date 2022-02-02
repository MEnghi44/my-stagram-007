import React, { useState } from "react";

const Navbar = (props) => {
  const [search, setSearch] = useState("");
  const handlesubmit = () => {
    props.getPhotosSearch(search);
  };
  return (
    <div className="navbar mb-4 shadow-lg bg-neutral text-neutral-content">
      <div className="flex-1 hidden px-6 mx-6 lg:flex">
        <a className="text-lg font-bold" href="/">
          Home
        </a>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            aria-label="Search"
            className="input input-ghost"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={handlesubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
