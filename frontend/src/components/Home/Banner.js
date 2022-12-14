import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input
            class="mx-2 col-4 rounded"
            type="text"
            id="search-box"
            placeholder="What is it that you truly desire ?"
            name="title"
            aria-label="Search"
          />

          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
