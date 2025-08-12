import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from "../auth/auth"
import axios from 'axios';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Bosh sahifa");
  const { isAuthenticated, logout, user } = useAuth();



  const navigate = useNavigate();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async() =>{
    await axios.get("http://localhost:8000/users/logout",{withCredentials:true})
    navigate("/")
    logout()
  }

  useEffect(() => {
    const savedItem = localStorage.getItem("activeNavItem");

    if (savedItem) {
      setActiveItem(savedItem);

      if (window.location.pathname === "/") {
        const savedRoute =
          navItems.find((item) => item.label === savedItem)?.router || "/";
        navigate(savedRoute);
      }
    }
  }, []);

  const deleteItem = () =>{
    
    localStorage.removeItem("activeNavItem");
    
  }

  const handleNavClick = (label: string) => {
    setActiveItem(label);
    localStorage.setItem("activeNavItem", label);
  };

  let navItems = [
  { label: "Bosh sahifa", router: "/" },
  { label: "Ma'lumotnoma", router: "/about" },
  { label: "Bog'lanish", router: "/connect" },
  ];

  if (isAuthenticated){
    navItems.push({label: "Chat", router: "/chat"});
    navItems.push({label: "Blog", router:""});
  }


  return (
    <>
      <header className="z-50 top-0 left-0 right-0 fixed bg-black bg-opacity-40 backdrop-blur-md border-b border-[var(--green-border)] h-16 w-full flex items-center justify-around px-4 select-none">
        <div className="px-4 py-2 font-bold flex items-center">
          <p className="text-[24px] text-white font-rajdhani">UZBEK DEV</p>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-white font-medium font-rajdhani uppercase text-sm tracking-wider">
          {navItems.map((item, index) => (
            <Link to={`${item.router || '#'}`}>
              <li
                key={index}
                onClick={() => handleNavClick(item.label)}
                className={`relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-[var(--green-text)] before:to-teal-500 before:transition-all before:duration-500
                ${activeItem === item.label ? 'text-[var(--green-text)] before:w-full' : 'hover:text-[var(--green-text)] before:w-0 hover:before:w-full'}
              `}
              >
                {item.label}
              </li>
            </Link>
          ))}

          <div className="border-l-[1px] border-l-[var(--green-border)] flex items-center gap-6 pl-4">
            <select
              name="language"
              className="bg-black text-sm text-white px-2 py-1 rounded focus:outline-none focus:ring-0 hover:cursor-pointer"
            >
              <option value="O'zbekcha">O'zbekcha</option>
              <option value="English">English</option>
            </select>
          </div>
          <div className="border-l-[1px] border-l-[var(--green-border)] flex items-center gap-6 pl-4">
            {isAuthenticated ? (
             <>
             <p>{user?.username}</p>
            <li

            onClick={handleLogout}
              className="flex items-center justify-center gap-1 p-1 border border-[var(--green-border)] rounded transition hover:text-[var(--green-text)] hover:shadow-2xl text-white duration-300 cursor-pointer"
            >
              <li className="">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-lock" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
              </li>
              <p className='text-[10px] mt-[2px]'>Chiqish</p>
            </li>
            </>
            ) : (
            <>
            <p>GHOST</p>
            <Link to='/auth'
              onClick={deleteItem}
              className="flex items-center justify-center gap-1 p-1 border border-[var(--green-border)] rounded transition hover:text-[var(--green-text)] hover:shadow-2xl text-white duration-300 cursor-pointer"
            >
              <li className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
              </li>
              <p className='text-[10px] mt-[2px]'>Kirish</p>
            </Link>
            </>
            )}

          </div>
        </ul>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </header>

      <div
        className={`fixed top-16 right-0 h-full w-64 bg-black bg-opacity-90 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col items-start gap-4 text-white font-medium font-rajdhani uppercase text-sm tracking-wider p-6">
          {navItems.map((item, index) => (
            <Link to={`${item.router || '#'}`}>
              <li
                key={index}
                onClick={() => handleNavClick(item.label)}
                className={`relative cursor-pointer transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-[var(--green-text)] before:to-teal-500 before:transition-all before:duration-500
                ${activeItem === item.label ? 'text-[var(--green-text)] before:w-full' : 'hover:text-[var(--green-text)] before:w-0 hover:before:w-full'}
              `}
              >
                {item.label}
              </li>
            </Link>
          ))}

          <li className="mt-4">
            <select
              name="language"
              className="bg-black text-sm text-white px-2 py-1 rounded focus:outline-none focus:ring-0 hover:cursor-pointer"
            >
              <option value="O'zbekcha">O'zbekcha</option>
              <option value="English">English</option>
            </select>
          </li>
          <ul className="flex items-center gap-6 mt-4">
            {isAuthenticated ? (<li
            onClick={handleLogout}
              className="flex items-center justify-center gap-1 p-1 border border-[var(--green-border)] rounded transition hover:text-[var(--green-text)] hover:shadow-2xl text-white duration-300 cursor-pointer"
            >
              <li className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-lock" viewBox="0 0 16 16">
                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1" />
                </svg>
              </li>
              <p className='text-[10px] mt-[2px]'>Chiqish</p>
            </li>
            ) : (<Link to='/auth'
              className="flex items-center justify-center gap-1 p-1 border border-[var(--green-border)] rounded transition hover:text-[var(--green-text)] hover:shadow-2xl text-white duration-300 cursor-pointer"
            >
              <li className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                </svg>
              </li>
              <p className='text-[10px] mt-[2px]'>Kirish</p>
            </Link>
            )}


          </ul>

        </ul>
      </div>
    </>
  );

}

export default Header;