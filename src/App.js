import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Service from "./Service";
import Admin from "./Admin";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>  
  );
}

export default App;
