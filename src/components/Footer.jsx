export default function Footer() {
  return (
    <footer className="bg-orange-300 w-full py-8 font-alt text-center sm:text-left">
      <div className="con flex flex-col items-center gap-8 sm:gap-24 sm:flex-row sm:items-start">
        <img src="/logo.svg" alt="Logo" className="mb-4 sm:mb-0" />

        <div className="w-full sm:w-auto">
          <h2 className="text-lg mb-2 font-medium">Address</h2>
          <p>
            Svobody str. 35 <br />
            Kyiv <br />
            Ukraine
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <h2 className="text-lg mb-2 font-medium">Contact us</h2>
          <ul className="flex justify-center sm:justify-start items-center gap-4">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:opacity-75"
              >
                <img src="/ins.png" alt="Instagram" width="40" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:opacity-75"
              >
                <img src="/fac.png" alt="Facebook" width="40" />
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:opacity-75"
              >
                <img src="/wha.png" alt="WhatsApp" width="40" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
