import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page routes 
import LandingPage from "./views/LandingPage";
import NotFound from "./views/NotFound";

// imported store routes
import Pricing from "./components/pricing/Pricing";
import Monthly from "./components/pricing/Monthly";
import Annually from "./components/pricing/Annually";



import SignUp from "./views/SignUp";
import Main from "./views/Main";
import ContactUs from "./components/ContactUs";
import Login from "./views/Login";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<LandingPage />} >
            <Route path="/" element={<Pricing />} >
              <Route path="" element={<Monthly />} />
              <Route path="annually" element={<Annually />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
