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

        <Route path="/dashboard" element={<DashboardRoute />} >
          <Route path="/dashboard" element={<OverView />} />
          <Route path="stores" element={<Stores />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
