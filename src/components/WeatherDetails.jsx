import Section from "./Section";
import WeatherDetailsEl from "./WeatherDetailsEl";

import weath1 from "../assets/weath1.svg";
import weath2 from "../assets/weath2.svg";
import weath3 from "../assets/weath3.svg";
import weath4 from "../assets/weath4.svg";
import weath5 from "../assets/weath5.svg";

export default function WeatherDetails({ weather, curCity, detailed }) {
  const data = weather.filter((el) => el[0].location.name === curCity)[0];

  if (data && detailed)
    return (
      <Section title={"Detailed weather of " + curCity}>
        <ul className="bg-neutral-400 rounded-[20px] px-8 sm:px-24 py-8 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-16 gap-y-12">
          <WeatherDetailsEl
            title="Feels like"
            value={data[0].current.feelslike_c}
            img={weath1}
            unit="°C"
          />
          <WeatherDetailsEl
            title="Min °C"
            title2="Max °C"
            value={data[0].forecast.forecastday[0].day.mintemp_c}
            value2={data[0].forecast.forecastday[0].day.maxtemp_c}
            unit="°C"
          />
          <WeatherDetailsEl
            title="Humidity"
            value={data[0].current.humidity}
            img={weath5}
            unit="%"
          />
          <WeatherDetailsEl
            title="Pressure"
            value={data[0].current.pressure_mb}
            img={weath2}
            unit=" hPa"
          />
          <WeatherDetailsEl
            title="Wind speed"
            value={data[0].current.wind_kph}
            img={weath3}
            unit=" m/s"
          />
          <WeatherDetailsEl
            title="Visibility"
            img={weath4}
            value={data[0].current.vis_km}
            unit=" km"
          />
        </ul>
      </Section>
    );
}
