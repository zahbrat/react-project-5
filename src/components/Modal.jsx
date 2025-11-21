import { useEffect } from "react";

import Btn from './Btn'

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[25px] w-full max-w-lg pl-18 pr-18 pt-6 pb-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl text-center font-alt pb-8">Sign Up</h2>

        <Btn text="Sign Up" className="mx-auto mt-0 mb-4" />
        <p className="text-center text-sm">
          Already have an account? <a href="#" className="underline">Log In</a>
        </p>
      </div>
    </div>
  );
}
