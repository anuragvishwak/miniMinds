import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Service from './Service';

function App() {
  return (
    <div className="App">
   <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
