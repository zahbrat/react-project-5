export default function Btn({ text, children, onClick, className = '' }) {
  const buttonContent = text ? text : children;
  return (
    <button
      className={`bg-orange-300 text-lg rounded-[10px] px-4 py-2 cursor-pointer font-medium ${className}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}