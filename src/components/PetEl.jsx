export default function PetEl({ image, desc }) {
  return (
    <li>
      <div className="aspect-4/3 w-full pb-4">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover rounded-[10px]"
        />
      </div>
      <p className="text-lg">{desc}</p>
    </li>
  );
}
