import { ImSearch } from "react-icons/im";
import Btn from "./Btn";
import Input from './Input'

export default function Promo() {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  return (
    <section className="bg-[url(/bg.avif)] bg-blend-darken w-full py-24 text-white">
      <div className="con flex justify-center items-center flex-col gap-12">
        <h1 className="font-semibold text-5xl">Weather dashboard</h1>
        <div className="flex justify-center text-2xl w-full">
          <p className="pr-12 pb-16 flex-1 border-r-4 border-white text-right">
            Create your personal list of <br />
            favorite cities and always be <br />
            aware of the weather.
          </p>
          <p className="pl-12 pb-16 flex-1">
            {month[d.getMonth()]} {d.getFullYear()} <br />
            {weekday[d.getDay()]}, {d.getDate()}
            <sup>th</sup>
          </p>
        </div>
        <div className="flex justify-center align-center w-[50%]">
          <Input />
          <Btn className="text-black rounded-l-none rounded-r-[10px] border-l-4 border-black !px-4 !py-4">
            <ImSearch />
          </Btn>
        </div>
      </div>
    </section>
  );
}
