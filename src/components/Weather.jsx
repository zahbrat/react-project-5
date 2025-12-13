import Section from "./Section";
import WeatherEl from "./WeatherEl";

export default function Weather({
  weather,
  setCurCity,
  setDetailed,
  sethourly,
  setdaily,
  handleToggleHeart,
  handleDeleteWeather,
  handleRefreshWeather,
}) {
  return (
    <Section>
      {weather.length ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {weather.map((el) => (
            <WeatherEl
              key={el[2]}
              id={el[2]}
              heart={el[1]}
              handleToggleHeart={handleToggleHeart}
              city={el[0].location.name}
              sethourly={sethourly}
              setdaily={setdaily}
              setDetailed={setDetailed}
              img={el[0].current.condition.icon.replace("64x64", "128x128")}
              handleDeleteWeather={handleDeleteWeather}
              time={el[0].location.localtime.split(" ")[1]}
              date={el[0].location.localtime.split(" ")[0]}
              dayOfWeek={new Date(el[0].location.localtime).toLocaleDateString(
                "en-US",
                { weekday: "long" }
              )}
              country={el[0].location.country}
              degrees={el[0].current.temp_c}
              setCurCity={setCurCity}
              handleRefreshWeather={handleRefreshWeather}
            />
          ))}
        </ul>
      ) : (
        <p className="text-lg">You haven't added any cities</p>
      )}
    </Section>
  );
}