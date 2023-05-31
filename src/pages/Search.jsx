import React from "react";
import NavBar from "../components/NavBar";
import SearchCard from "../components/SearchCard";
// import Card from '../components/Card'

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-between">
        <div className="flex-col space-y-6 w-[65%] pl-[1rem]">
          <div>
            <h1 className="text-[0.9rem]">Over 1,000 places</h1>
          </div>
          <div className="w-inherit flex justify-between border-[1px] border-greyish py-[0.5rem] rounded-xl">
            <span className="py-[0.2rem] px-[1rem] border-r-[1px] border-greyish">Display total price</span>
            <span className="py-[0.2rem] px-[1rem] border-r-[1px] border-greyish">Include all fees, before taxes</span>
            <div>
              <label className="switch">
                <input type="checkbox" className="input"/>
                <span className="slider">
                  <svg
                    class="slider-icon"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path fill="none" d="m4 16.5 8 8 16-16"></path>
                  </svg>
                </span>
              </label>
            </div>
            {/* <input type='checkbox'/> */}
          </div>
          <div className="search-index-container-layout">
            <SearchCard />
          </div>
        </div>
        <div>
          <h3>Map imaged</h3>
        </div>
      </div>
    </div>
  );
};

export default Search;