import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import igIcon from "./icon-instagram.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme(e) {
    setDarkMode(e.target.checked);
  }

  return (
    <div className={`${darkMode && 'dark'}`}>
      <div className="text-text-main dark:text-text-mainDark bg-bg-body dark:bg-bg-bodyDark min-h-screen">
        {/* Header */}
        <header className="bg-bg-header dark:bg-bg-headerDark h-[245px]">
          <div className="container pt-9 flex md:justify-between md:items-center flex-col md:flex-row">
            <div className="pb-4 md:pb-0">
              <h1 className="text-text-sec dark:text-text-secDark font-bold text-3xl">
                Social Media Dashboard
              </h1>
              <span className="font-bold">Total Followers: 23,004</span>
            </div>
            <hr className="md:hidden border-gray-700" />
            <div className="flex justify-between pt-4 md:pt-0">
              <label
                htmlFor="checkbox"
                className="mr-2 font-bold text-text-main dark:text-text-mainDark opacity-65 text-sm"
              >
                Dark Mode
              </label>
              <span>
                <input
                  className="
                bg-toggleColor-light
                before:bg-toggleColor-light
                after:bg-white

                checked:bg-toggleColor-light
                checked:after:bg-white

                dark:bg-gradient-to-r from-toggleColor-dark1 to-toggleColor-dark2
               

                me-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem]  before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full  before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none  after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-['']  checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none  checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary  checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
              
                "
                  type="checkbox"
                  role="switch"
                  id="checkbox"
                  onChange={toggleTheme}
                />
              </span>
            </div>
          </div>
        </header>

        {/* Main Cards */}
        <section className="container -mt-[50px] md:-mt-[110px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card */}
          <div className="card before:bg-primary-fb">
            <div className="flex items-center justify-center gap-1 mb-6">
              <span className="text-primary-fb">
                <AiFillFacebook size={25} />
              </span>
              <span className="font-bold text-sm">@nathanf</span>
            </div>
            <h2 className="text-text-sec dark:text-text-secDark text-6xl font-bold mb-2">
              1987
            </h2>
            <p className="uppercase tracking-[0.3rem] text-xs">Followers</p>
            <div className="flex items-center justify-center gap-1 mt-6">
              <span className="text-primary-limeGreen">
                <RiArrowUpSFill />
              </span>
              <span className="text-primary-limeGreen text-sm font-bold">
                12 Today
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="card before:bg-primary-tw">
            <div className="flex items-center justify-center gap-1 mb-6">
              <span className="text-primary-tw">
                <AiFillTwitterSquare size={22} />
              </span>
              <span className="font-bold text-sm">@nathanf</span>
            </div>
            <h2 className="text-text-sec dark:text-text-secDark text-6xl font-bold mb-2">
              1044
            </h2>
            <p className="uppercase tracking-[0.3rem] text-xs">Followers</p>
            <div className="flex items-center justify-center gap-1 mt-6">
              <span className="text-primary-limeGreen">
                <RiArrowUpSFill />
              </span>
              <span className="text-primary-limeGreen text-sm font-bold">
                99 Today
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="card before:bg-gradient-to-r from-primary-ig1 to-primary-ig2">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span>
                <img src={igIcon} />
              </span>
              <span className="font-bold text-sm">@realnathanf</span>
            </div>
            <h2 className="text-text-sec dark:text-text-secDark text-6xl font-bold mb-2">
              11k
            </h2>
            <p className="uppercase tracking-[0.3rem] text-xs">Followers</p>
            <div className="flex items-center justify-center gap-1 mt-6">
              <span className="text-primary-limeGreen">
                <RiArrowUpSFill />
              </span>
              <span className="text-primary-limeGreen text-sm font-bold">
                1099 Today
              </span>
            </div>
          </div>
          {/* Card */}
          <div className="card before:bg-primary-yt">
            <div className="flex items-center justify-center gap-1 mb-6">
              <span className="text-primary-yt">
                <AiFillYoutube size={22} />
              </span>
              <span className="font-bold text-sm">Nathan F.</span>
            </div>
            <h2 className="text-text-sec dark:text-text-secDark text-6xl font-bold mb-2">
              8239
            </h2>
            <p className="uppercase tracking-[0.3rem] text-xs">Subscribers</p>
            <div className="flex items-center justify-center gap-1 mt-6">
              <span className="text-primary-brightRed">
                <RiArrowDownSFill />
              </span>
              <span className="text-primary-brightRed text-sm font-bold">
                144 Today
              </span>
            </div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="container pt-14">
          <h2 className="text-2xl font-bold">Overview - Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6">
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Page Views</span>
                <span className="text-primary-fb">
                  <AiFillFacebook size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  87
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    3%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Likes</span>
                <span className="text-primary-fb">
                  <AiFillFacebook size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  52
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-brightRed">
                    <RiArrowDownSFill />
                  </span>
                  <span className="text-primary-brightRed text-sm font-bold">
                    2%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Likes</span>
                <span>
                  <img src={igIcon} alt="" />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  5462
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    2257%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Profile Views</span>
                <span className="text-primary-fb">
                  <img src={igIcon} alt="" />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  52k
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    1375%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Retweets</span>
                <span className="text-primary-tw">
                  <AiFillTwitterSquare size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  117
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    303%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Likes</span>
                <span className="text-primary-tw">
                  <AiFillTwitterSquare size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  507
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    553%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Likes</span>
                <span className="text-primary-yt">
                  <AiFillYoutube size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  107
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    19%
                  </span>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="overview-card">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm">Total Views</span>
                <span className="text-primary-yt">
                  <AiFillYoutube size={22} />
                </span>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-4xl font-bold text-text-sec dark:text-text-secDark">
                  1407
                </span>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-primary-limeGreen">
                    <RiArrowUpSFill />
                  </span>
                  <span className="text-primary-limeGreen text-sm font-bold">
                    12%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
