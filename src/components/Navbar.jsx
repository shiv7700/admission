import './Navbar.css'
import admission from "../assets/adm.png";
import Group2 from "../assets/profile.png";

function Navbar() {
  return (
    <>
      <div className="topbar-section">
        <div className="">
          <div className="topbar-inner">
            <div className="top-bar-left items-center">
              <img src={admission} className="" alt="" />
            </div>

            <nav className="border-gray-200 bg-indigo-950 mobile-navbar">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img src={admission} className="h-8 mr-3" alt="Flowbite Logo" />
                </a>
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
                <div
                  className="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul className="font-medium appearance-none flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-indigo-950 dark:border-gray-700">
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white "
                        aria-current="page"
                      >
                        MBA
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        ENGINEERING
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        COUNSELLING
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        MEDICAL
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        DIPLOMA
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div className="top-bar-right flex flex-col">
              <div className="flex gap-14 ps-56 pe-10 p-6 text-white text-sm">
                <div>TOP UNIVERSITIES & COLLEGES</div>
                <div>TOP COURSES</div>
                <div>EXAMS</div>
                <div>EVENTS</div>
                <div>
                  <img src={Group2} alt="" className="w-6 h-6" />
                </div>
              </div>

              <div className="top-bar flex gap-14 pt-4 ps-48 pe-10 text-black bg-white pb-3 text-sm">
                <div>MBA</div>
                <div>ENGINEERING</div>
                <div>MEDICAL</div>
                <div>DIPLOMA </div>
                <div>COUNSELLING</div>
              </div>
            </div>

            {/* <div className=" bg-white mainnav">
              <nav className="primary-nav">
                <ul className="menu-main">
                  <li className="">
                    
                      <span className="">MBA</span>
                    
                  </li>
                  <li className="">
                    
                      <span className="">ENGINEERING</span>
                    
                  </li>
                  <li className="">
                    
                      <span className="">MEDICAL</span>
                    
                  </li>
                  <li className="">
                    
                      <span className="">DIPLOMA</span>
                    
                  </li>
                  <li className="">
                    
                      <span className="">COUNSELLING</span>
                    
                  </li>
                  <li className="">
                    
                      <span className="">MBA</span>
                    
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
