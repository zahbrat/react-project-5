import Btn from "./Btn";
import LiLink from "./LiLink";

export default function Header() {
  return (
    <header className="font-alt">
      <div class="con flex justify-between items-center py-4">
        <div className="flex justify-between items-center gap-32">
          <img src="/logo.svg" alt="Logo" />
          <nav>
            <ul className="flex justify-between items-center gap-16">
              <LiLink text="Who we are?" />
              <LiLink text="Contacts" />
              <LiLink text="Menu" />
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center gap-8">
          <Btn text="Sign Up" />
          <img src="/user.svg" alt="User Picture" />
        </div>
      </div>
    </header>
  );
}
