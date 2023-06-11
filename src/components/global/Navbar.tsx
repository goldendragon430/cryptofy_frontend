import { useState } from "react";
import SignUpModal from "../Register";
import LoginModal from "../Login";
import logo from '../../assets/updatedlogo.png'
import { useAuth } from '../../contexts/SessionContext'
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [, { isAuthed }] = useAuth();
  const [isLOpen, setIsLOpen] = useState(false);
  const [isSOpen, setIsSOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLClose = () => setIsLOpen(false);
  const handleLOpen = () => setIsLOpen(true);

  const handleSClose = () => setIsSOpen(false);
  const handleSOpen = () => setIsSOpen(true);
  const navigate = useNavigate()
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full box-shadow items-center bg-white z-10 py-3">
      <div className="flex justify-between px-2 items-center">
        <img
          src={logo}
          className="w-50 h-10"
          alt="Logo"
        />

        <div className="flex lg:hidden items-center">
          {isAuthed() == false ?
            <div className="flex h-fit gap-1">
              <button
                className="btn cornered-border px-4 py-2 text-white hover:bg-left"
                onClick={handleLOpen}
              >
                Login
              </button>
              <button
                className="btn cornered-border px-4 py-2 text-white hover:bg-left"
                onClick={handleSOpen}
              >
                Register
              </button>
            </div> :
            <button
              className="btn cornered-border px-4 py-2 text-white hover:bg-left"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </button>
          }
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 text-secondred text-5xl"
          >
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-8 w-8 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  ${isOpen ? "block" : "hidden"
          }`}
      >
        <nav className="w-full text-black py-5">
          <ul className="flex flex-col gap-3 pl-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a onClick={() => { document.getElementById('statistics').scrollIntoView({ behavior: "smooth" }) }}>Statistics</a>
            </li>
            <li>
              <a href="/affiliate-program">Affiliate Program</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>

            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="/contacts">Contact us</a>
            </li>
          </ul>
        </nav>

        <SignUpModal isOpen={isSOpen} handleClose={handleSClose} />
        <LoginModal isOpen={isLOpen} handleClose={handleLClose} />
      </div>
    </header>
  );
}
