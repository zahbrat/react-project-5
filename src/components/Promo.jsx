import { ImSearch } from "react-icons/im";
import Btn from "./Btn";
import Input from "./Input";
import { useState } from "react";
import { toast } from "react-toastify";
import myFetch from "../functions/myFetch";
import backgroundImage from "../assets/bg.avif";

export default function Promo({ handleSetWeather }) {
  const [city, setCity] = useState("");

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

  const handleSearch = async () => {
    if (!city.trim()) {
      toast("You have entered nothing");
      return;
    }

    const data = await myFetch(city, 7);
    if (data) {
      handleSetWeather(data);
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-blend-darken w-full py-12 sm:py-24 text-white"
    >
      <div className="con flex justify-center items-center flex-col gap-6 sm:gap-12">
        <h1 className="font-semibold text-center text-3xl sm:text-5xl">
          Weather dashboard
        </h1>
        <div className="flex justify-center text-lg sm:text-2xl w-full">
          <p className="pr-6 sm:pr-12 pb-8 sm:pb-16 flex-1 border-r-4 border-white text-right">
            Create your personal list of <br />
            favorite cities and always be <br />
            aware of the weather.
          </p>
          <p className="pl-6 sm:pl-12 pb-8 sm:pb-16 flex-1">
            {month[d.getMonth()]} {d.getFullYear()} <br />
            {weekday[d.getDay()]}, {d.getDate()}
            <sup>th</sup>
          </p>
        </div>

        <div className="flex justify-center align-center sm:w-[50%]">
          <Input
            withBtn={true}
            placeholder="Search location..."
            type="text"
            className="text-lg"
            value={city}
            onInput={(e) => setCity(e.target.value)}
          />
          <Btn
            className="text-black rounded-l-none rounded-r-[10px] border-l-4 border-black !px-4 !py-4"
            onClick={handleSearch}
          >
            <ImSearch />
          </Btn>
        </div>
      </div>
    </section>
  );
}
