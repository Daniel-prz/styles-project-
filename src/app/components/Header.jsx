import React from "react";
import Navbar from "./Navbar";
import Search from "../svgs/Search";

export default function Header() {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <header className="mt-8 text-4xl italic bold md:ml-32">
          <h1>
            Food <span className=" text-red-800">Galore</span>
          </h1>
        </header>
        <Navbar />
      </div>
      <div className="flex justify-center">
        <input
          className="italic pl-6 searchInput "
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Browse Recipes..."
        />
        <button className="searchButton pl-1 rounded-sm" type="submit">
          <Search />
        </button>
      </div>
    </div>
  );
}
