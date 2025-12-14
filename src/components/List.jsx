import Section from "./Section";
import ListItem from "./ListItem";

export default function List({ weather, curCity, daily }) {
  const object = weather.filter((el) => el[0].location.name === curCity)[0];
  const arr = object ? object[0].forecast.forecastday : [];

  if (curCity && daily)
    return (
      <Section title={"Weekly weather for " + curCity}>
        <div className="bg-neutral-400 rounded-[20px] px-4 sm:px-12 md:px-24 py-6 sm:py-16 lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {arr.map((el) => (
              <div
                key={el.date_epoch}
                className="p-3 flex flex-col items-center bg-neutral-600 rounded-lg"
              >
                <p className="text-sm font-semibold">
                  {new Date(el.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <img
                  src={"https:" + el.day.condition.icon}
                  alt={el.day.condition.text}
                  width="50"
                  height="50"
                  className="my-1"
                />
                <p className="text-xl font-bold">
                  {Math.round(el.day.avgtemp_c)}°C
                </p>
                <p className="text-xs text-center mt-1">
                  {el.day.condition.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ul className="hidden lg:flex bg-neutral-400 rounded-[20px] px-4 sm:px-12 md:px-24 py-6 sm:py-16 flex-col gap-4">
          {arr.map((el) => (
            <ListItem
              key={el.date_epoch}
              date={el.date}
              img={el.day.condition.icon}
              desc={el.day.condition.text}
              deg={el.day.avgtemp_c}
            />
          ))}
        </ul>
      </Section>
    );
}
