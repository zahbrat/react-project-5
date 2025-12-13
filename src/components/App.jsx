import { useState, useEffect } from "react";

import Header from "./Header";
import Promo from "./Promo";
import Pets from "./Pets";
import Nature from "./Nature";
import Footer from "./Footer";
import SignModal from "./SignModal";
import Diagram from "./Diagram";
import Weather from "./Weather";
import List from "./List";
import WeatherDetails from "./WeatherDetails";
import myFetch from "../functions/myFetch";

const WEATHER_STORAGE_KEY = "weatherList";
const USER_STORAGE_KEY = "userProfile";

export default function App() {
  const [user, setUser] = useState(null);

  const [weather, setWeather] = useState(() => {
    const savedWeather = localStorage.getItem(WEATHER_STORAGE_KEY);
    return savedWeather ? JSON.parse(savedWeather) : [];
  });

  useEffect(() => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        if (userData && userData.username) {
          setUser(userData.username);
        }
      } catch (e) {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(WEATHER_STORAGE_KEY, JSON.stringify(weather));
  }, [weather]);

  const [curCity, setCurCity] = useState("");
  const [detailed, setDetailed] = useState(false);
  const [hourly, sethourly] = useState(false);
  const [daily, setdaily] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSetWeather = (newItem) => {
    const id = crypto.randomUUID();
    setWeather((prevItems) => [[newItem, false, id], ...prevItems]);
  };

  const handleToggleHeart = (id) => {
    setWeather((prevItems) =>
      prevItems.map((innerArray) => {
        if (innerArray.includes(id)) {
          const newInnerArray = [...innerArray];
          newInnerArray[1] = !newInnerArray[1];
          return newInnerArray;
        }
        return innerArray;
      })
    );
  };

  const handleDeleteWeather = (id) => {
    setWeather((prevItems) =>
      prevItems.filter((innerArray) => innerArray[2] !== id)
    );
  };

  const handleRefreshWeather = async (id) => {
    const cityToUpdate = weather.find((el) => el[2] === id);
    if (!cityToUpdate) return;

    const cityName = cityToUpdate[0].location.name;
    const updatedData = await myFetch(cityName, 7);

    if (updatedData && updatedData.error) {
      console.error(
        "Failed to refresh weather data:",
        updatedData.error.message
      );
      return;
    }

    setWeather((prevItems) =>
      prevItems.map((innerArray) => {
        if (innerArray[2] === id) {
          return [updatedData, innerArray[1], innerArray[2]];
        }
        return innerArray;
      })
    );
  };

  return (
    <>
      <Header onOpenModal={openModal} username={user} />
      <Promo handleSetWeather={handleSetWeather} weather={weather} />
      <Weather
        weather={weather}
        setCurCity={setCurCity}
        setDetailed={setDetailed}
        sethourly={sethourly}
        setdaily={setdaily}
        handleToggleHeart={handleToggleHeart}
        handleDeleteWeather={handleDeleteWeather}
        handleRefreshWeather={handleRefreshWeather}
      />
      <WeatherDetails weather={weather} curCity={curCity} detailed={detailed} />
      <Diagram weather={weather} curCity={curCity} hourly={hourly} />
      <List weather={weather} curCity={curCity} daily={daily} />
      <Pets />
      <Nature />
      <Footer />

      <SignModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
