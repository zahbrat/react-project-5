import Section from './Section'

export default function ListItem({date = '', deg = 0, img = "", desc=""}) {
  return (
    <li className="bg-neutral-600 rounded-[10px] py-2 px-8 text-center flex justify-between items-center">
      <p>{date}</p>
      <div className="flex items-center gap-2">
        <img src={img} alt={desc} width="50" />
        <p>{deg}</p>
      </div>
      <p>{desc}</p>
    </li>
  );
}