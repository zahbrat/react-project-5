export default function WeatherDetailsEl({ title, value = "", title2, value2, img, unit }) {
  return (
    <li className="bg-neutral-600 rounded-[10px] px-8 sm:px-16 py-8 text-center">
      <p>{title}</p>
      <p className="text-4xl mt-2 mb-4 ">{value + unit}</p>
      <p>{title2}</p>
      <p className="text-4xl mt-2 mb-4 ">{value2 ? value2 + unit : ""}</p>
      {img ? <img src={img} alt={title} className="mx-auto my-0" /> : ""}
    </li>
  );
}