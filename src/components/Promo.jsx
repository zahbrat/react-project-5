import { ImSearch } from "react-icons/im";
import Btn from "./Btn";

export default function Promo() {
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
            October 2023 <br />
            Friday, 13<sup>th</sup>
          </p>
        </div>
        <div className="flex justify-center align-center w-[50%]">
          <input
            type="text"
            placeholder="Search location..."
            className="text-xl placeholder-neutral-500 text-neutral-500 bg-neutral-200 py-2 px-8 rounded-l-[10px] outline-none w-full"
          />
          <Btn className="text-black rounded-l-none rounded-r-[10px] border-l-4 border-black !px-4 !py-4">
            <ImSearch />
          </Btn>
        </div>
      </div>
    </section>
  );
}
