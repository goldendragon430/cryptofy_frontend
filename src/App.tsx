import { Route } from "react-router-dom";
import NavWrapper from "./components/global/NavWrapper";
import Dashboard from "./components/Dashboard";
import Landing from "./pages/Landing";
import MainDashboard from "./components/MainDashboard";
import Deposit from "./components/Deposit";
import AffiliteProgram from "./components/AffiliateProgram";
import Bonuses from "./components/Bonuses";
import OthersWrapper from "./components/Wrapper";
import FAQ from "./components/FAQ";
import AboutUs from "./components/Aboutus";
import AffilateProgram2 from "./components/AffiliateProgram2";
import Terms from "./components/Terms";
import Contacts from "./components/Contacts";
import Pricing from "./components/Pricing";
import { ToastContainer } from "react-toastify";
import { ProtectedRoute, AdminRoute } from './utils';
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./components/admin/AdminDashboard";
import UsersTable from "./components/admin/UsersTable";
import Management from "./components/Management";

const App = () => {
  return (
    <div className="h-screen w-full">
      <ToastContainer />
      <NavWrapper>
        <Route path="/" element={<Landing />}></Route>
        <Route path="ref/:id" element={<Landing />}></Route>
        <Route path="dashboard" element={<ProtectedRoute children={<Dashboard />} />}>
          <Route index element={<MainDashboard />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="affiliate" element={<AffiliteProgram />} />
          <Route path="bonuses" element={<Bonuses />} />
        </Route>
        <Route path="/" element={<OthersWrapper />}>
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/affiliate-program" element={<AffilateProgram2 />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="admin" element={<AdminRoute children={<AdminDashboard />} />}>
          <Route path="" element={<UsersTable />} />
          <Route path="management" element={<Management />} />
        </Route>
        <Route path="/plans" element={<Pricing />} />
      </NavWrapper>
    </div>
  );
};

export default App;
