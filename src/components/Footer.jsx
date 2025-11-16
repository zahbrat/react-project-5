export default function Footer() {
  return (
    <footer className="bg-orange-300 w-full py-8 font-alt">
      <div className="con flex gap-24 items-start">
        <img src="/logo.svg" alt="Logo" />
        <div>
          <h2 className="text-lg mb-2">Address</h2>
          <p>
            Svobody str. 35 <br />
            Kyiv <br />
            Ukraine
          </p>
        </div>
        <div>
          <h2 className="text-lg mb-2">Contact us</h2>
          <ul className="flex items-center gap-4 cursor-pointer">
            <li>
              <img src="/ins.png" width="40" />
            </li>
            <li>
              <img src="/fac.png" width="40" />
            </li>
            <li>
              <img src="/wha.png" width="40" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
