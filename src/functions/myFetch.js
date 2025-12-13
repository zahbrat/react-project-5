export default async function myFetch(location, days) {
  if (!location) {
    alert("You have entered nothing");
    return;
  }

  const url = `https://api.weatherapi.com/v1/forecast.json?key=ae6d5b28adc34a28aef52551250712&q=${location}&days=${days}&aqi=no&alerts=no`

  try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(`Error getting weather value from ${location}:`, error);
      alert(`A city "${location}" doesn't exist.`);
    }
}