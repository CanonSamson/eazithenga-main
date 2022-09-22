import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page routes 
import LandingPage from "./views/LandingPage";
import NotFound from "./views/NotFound";

// imported store routes
import Pricing from "./components/pricing/Pricing";


import SignUp from "./views/SignUp";
import Main from "./views/Main";
import ContactUs from "./components/ContactUs";
import Login from "./views/Login";
import ScrollToTop from "./components/ScrollToTop";
import DashboardRoute from "./views/dashboard/DashboardRoute";
import Stores from "./views/dashboard/Stores";
import Messages from "./views/dashboard/Messages";
import OverView from "./views/dashboard/OverView";
import Auth from "./views/dashboard/Auth";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<LandingPage />} >
            <Route path="/" element={<Pricing />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcc" element={<Auth />} />
        <Route path="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard" element={<DashboardRoute />} >
          <Route path="/120igaiscq9jq-4oqjfcof-=q0fq-kc;ckk3-fjwofkwvlefklf2-kf'alawk-fcokcccccccwjfifdashboard" element={<OverView />} />
          <Route path="stores" element={<Stores />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
