import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page routes 
import LandingPage from "./views/LandingPage";
import NotFound from "./views/NotFound";

// imported store routes
import Pricing from "./components/pricing/Pricing";
import Monthly from "./components/pricing/Monthly";
import Annually from "./components/pricing/Annually";




import Login from "./views/Login";
import SignUp from "./views/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} >
          <Route path="/" element={<Pricing />} >
            <Route path="" element={<Monthly />} />
            <Route path="annually" element={<Annually />} />
          </Route>
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
