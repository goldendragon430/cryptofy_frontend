import { useEffect, useState } from "react";
import SignUpModal from "../Register";
import LoginModal from "../Login";
import { useAuth } from '../../contexts/SessionContext'
import { useNavigate } from "react-router-dom";
import logo from '../../assets/updatedlogo.png'
import { useTranslation } from "react-i18next";
import LanguageSelect from "../../LanguageSelect";
const Nav2 = () => {
  const { t } = useTranslation()
  const [, { isAuthed }] = useAuth();
  const [isLOpen, setIsLOpen] = useState(false);
  const [isSOpen, setIsSOpen] = useState(false);

  const handleLClose = () => setIsLOpen(false);
  const handleLOpen = () => setIsLOpen(true);

  const handleSClose = () => setIsSOpen(false);
  const handleSOpen = () => setIsSOpen(true);
  const navigate = useNavigate()
  useEffect(() => {

  }, [])
  return (
    <header className="sticky top-0 z-10 hidden w-full items-center justify-between bg-white px-10 shadow-lg lg:flex">
      <a href="#"   >
        <img
          src={logo}
          alt=""
        />
      </a>

      <nav >
        <ul className="flex items-center justify-center gap-7">
          <li>
            <a className="text-primviolet hover:text-secondred" href="/">
              {t("Home")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" onClick={() => { document.getElementById('statistics').scrollIntoView({ behavior: "smooth" }) }}>
              {t("Statistics")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="/affiliate-program">
              {t("Affiliate Program")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="/faq">
              {t("FAQ")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="/terms">
              {t("Terms")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="/about-us">
              {t("About us")}
            </a>
          </li>
          <li>
            <a className="text-primviolet hover:text-secondred" href="/contacts">
              {t("Contact us")}
            </a>
          </li>
        </ul>
      </nav>

      <SignUpModal isOpen={isSOpen} handleClose={handleSClose} />
      <LoginModal isOpen={isLOpen} handleClose={handleLClose} />
      {isAuthed() == false ?
        <div className="flex h-fit gap-4">
          <LanguageSelect />
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
        </div> :
        <button
          className="btn cornered-border m-3 px-8 py-4 text-white hover:bg-left"
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>}
    </header>
  );
};

export default Nav2;