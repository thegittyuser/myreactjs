import "./css/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>
            Nicky<span>Store</span>
          </h2>
        </div>
        <div className="menu">
          <ul className="mainmenu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Shop</li>
            <li className="menu-item drop-opener">
              Categories
              {/* <ul className="dropdown">
                <li className="drop-item">Men Watch</li>
                <li className="drop-item">Tank Tops</li>
                <li className="drop-item">Women Bracelets</li>
              </ul> */}
            </li>
            <li className="menu-item">Men</li>
            <li className="menu-item">Women</li>
            <li className="menu-item">GYM Wear</li>
          </ul>
        </div>
        <div className="icons">
          <span className="cart-icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </span>
          <span className="user-icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span className="search-icon">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
