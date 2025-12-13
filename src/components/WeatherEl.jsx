import Btn from "./Btn";
import { FaRegTrashCan, FaRegHeart, FaArrowRotateRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function WeatherEl({
  city = "",
  country = "",
  time = "",
  degrees = "",
  setCurCity,
  setDetailed,
  setdaily,
  sethourly,
  img,
  date,
  dayOfWeek,
  id,
  heart,
  handleToggleHeart,
  handleDeleteWeather,
  handleRefreshWeather,
}) {
  const sD = () => {
    setCurCity(city);
    setDetailed(true);
  };
  const sd = () => {
    setCurCity(city);
    setdaily(true);
  };
  const sh = () => {
    setCurCity(city);
    sethourly(true);
  };

  const toggle = () => {
    handleToggleHeart(id);
  };

  const deleteEl = () => {
    handleDeleteWeather(id);
  };

  const refreshEl = () => {
    handleRefreshWeather(id);
  };

  return (
    <li className="bg-neutral-400 rounded-[20px] px-8 py-4">
      <div className="flex justify-between align-middle text-sm xs:text-base">
        <p>{city ? city : "Unknown"}</p>
        <p>{country ? country : "Unknown"}</p>
      </div>
      <p className="text-xl xs:text-3xl text-center my-2 sm:my-4">
        {time ? time : "Unknown"}
      </p>
      <div className="flex items-center justify-between gap-2">
        <Btn
          text="Hourly forecast"
          className="!text-sm !xs:px-4 !px-2"
          onClick={sh}
        />
        <Btn
          text="Weekly forecast"
          className="!text-sm !px-2 !xs:px-4"
          onClick={sd}
        />
      </div>
      <div className="text-center">
        <p className="my-4 text-sm sm:text-base">
          {date} | {dayOfWeek}
        </p>
        <img src={img} alt="icon" className="block mx-auto my-0" />
        <p className="text-2xl xs:text-4xl pt-2 xs:pt-4">
          {degrees ? degrees + "°C" : "Unknown"}
        </p>
      </div>
      <div className="text-3xl flex justify-between items-center mt-6 sm:mt-8">
        <IconContext.Provider value={{ className: "text-2xl sm:text-4xl" }}>
          <div onClick={refreshEl} className="cursor-pointer">
            <FaArrowRotateRight />
          </div>
          <div onClick={toggle} className="cursor-pointer">
            {heart ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-red-500" />
            )}
          </div>
        </IconContext.Provider>
        <Btn text="See more" className="!text-xs !sm:text-sm" onClick={sD} />
        <IconContext.Provider value={{ className: "text-2xl sm:text-4xl" }}>
          <div onClick={deleteEl} className="cursor-pointer">
            <FaRegTrashCan />
          </div>
        </IconContext.Provider>
      </div>
    </li>
  );
}
