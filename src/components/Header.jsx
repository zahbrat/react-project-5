import { useState } from "react";
import Btn from "./Btn";
import LiLink from "./LiLink";

export default function Header({ onOpenModal, username }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="font-alt">
      <div className="con flex justify-between items-center py-4">
        <img src="/logo.svg" alt="Logo" />

        <div className="hidden lg:flex items-center gap-16">
          <nav>
            <ul className="flex items-center gap-16">
              <LiLink text="Who we are?" />
              <LiLink text="Contacts" />
              <LiLink text="Menu" />
            </ul>
          </nav>

          <div className="flex items-center gap-8">
            {username ? (
              <p className="font-semibold text-lg text-neutral-800">
                {username}
              </p>
            ) : (
              <Btn text="Sign Up" onClick={onOpenModal} />
            )}
            {username && <img src="/user.svg" alt="User Picture" />}
          </div>
        </div>

        <Btn onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? "Close" : "Menu"}
        </Btn>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden absolute top-25 left-0 w-full bg-orange-200 shadow-lg z-10 p-4">
          <ul className="flex flex-col gap-4">
            <LiLink text="Who we are?" onClick={toggleMenu} />
            <LiLink text="Contacts" onClick={toggleMenu} />
            <LiLink text="Menu" onClick={toggleMenu} />

            <hr className="my-2 border-orange-300" />

            <div className="flex items-center gap-4 py-2">
              {username ? (
                <>
                  <p className="font-medium text-lg">
                    {username}
                  </p>
                  <img src="/user.svg" alt="User Picture" width="30" />
                </>
              ) : (
                <Btn
                  text="Sign Up"
                  onClick={() => {
                    onOpenModal();
                    toggleMenu();
                  }}
                />
              )}
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
