import { useEffect, useState } from "react";
import SignUpModal from "../Register";
import LoginModal from "../Login";
import {useAuth} from '../../contexts/SessionContext'
import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const [, { isAuthed }] = useAuth();
  const [isLOpen, setIsLOpen] = useState(false);
  const [isSOpen, setIsSOpen] = useState(false);

  const handleLClose = () => setIsLOpen(false);
  const handleLOpen = () => setIsLOpen(true);

  const handleSClose = () => setIsSOpen(false);
  const handleSOpen = () => setIsSOpen(true);
  const navigate = useNavigate()
  useEffect(()=>{

  },[])
  return (
    <header className="sticky top-0 z-10 hidden w-full items-center justify-between bg-white px-10 shadow-lg lg:flex">
      <a href="#">
        <img
          src="https://unxbot.com/unxtem24/trx_v2/assets/img/logo/logo.png"
          alt=""
        />
      </a>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Status
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <SignUpModal isOpen={isSOpen} handleClose={handleSClose} />
      <LoginModal isOpen={isLOpen} handleClose={handleLClose} />
      {isAuthed() == false ? 
      <div className="flex h-fit gap-4">
        <button
          className="btn cornered-border m-3 px-8 py-4 text-white hover:bg-left"
          onClick={handleLOpen}
        >
          Login
        </button>
        <button
          className="btn cornered-border m-3 px-8 py-4 text-white hover:bg-left"
          onClick={handleSOpen}
        >
         Register 
        </button>
      </div>:
      <button
          className="btn cornered-border m-3 px-8 py-4 text-white hover:bg-left"
          onClick={()=>navigate('/dashboard')}
        >
         Dashboard 
        </button>}
    </header>
  );
};

export default Nav2;