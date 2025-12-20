import { toast } from "react-toastify";

export default async function myFetch(location, days) {
  if (!location) return null;

  const url = `https://api.weatherapi.com/v1/forecast.json?key=ae6d5b28adc34a28aef52551250712&q=${location}&days=${days}&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      toast(`HTTP error! status: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast(`A city "${location}" doesn't exist.`);
    return null;
  }
}
