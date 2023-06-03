import { BrowserRouter as Router, Routes } from "react-router-dom";
import { type FC, ReactNode } from "react";

const NavWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Router>
      <Routes>{children}</Routes>
    </Router>
  );
};

export default NavWrapper;
