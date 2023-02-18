import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page routes
import LandingPage from "./pages/Main/LandingPage";
import NotFound from "./pages/Main/NotFound";

// imported store routes
import Pricing from "./components/pricing/Pricing";

import SignUp from "./pages/Main/SignUp";
import Main from "./pages/Main/Main";
import ContactUs from "./components/ContactUs";
import Login from "./pages/Main/Login";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./Auth";
import VerifyPhoneNum from "./components/VerifyPhoneNum";
import ProfilePage from "./pages/Main/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<LandingPage />}>
              <Route path="/" element={<Pricing />} />
            </Route>
            <Route path="/d" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signup" element={<VerifyPhoneNum />} />
          </Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
