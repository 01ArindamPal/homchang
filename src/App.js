import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Home from "./Home";
import ContactUs from "./contactUs";
import AboutUs from "./aboutUs"; // Renamed to match common camelCase conventions
import Gallery from './Gallery';

import ReportPage from "./components/ReportPage";

import AdminPel from "./adminSide/admin_login";
// import AdminDashboard from "./adminSide/admin_home";
// import AdminPersonal from "./adminSide/admin_PersonalDetails";
// import ManageContent from './adminSide/ManageContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={<Home />} />

          {/* Other Defined Routes */}
          <Route path="/about" element={<AboutUs />} /> {/* Adjusted the URL structure */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/report" element={<ReportPage />} />

          {/* Admin Routes (commented out for now) */}
          <Route path="/admin" element={<AdminPel />} />
          {/* <Route path="/adminHome" element={<AdminDashboard />} /> */}
          {/* <Route path="/adminDetails" element={<AdminPersonal />} /> */}
          {/* <Route path='/manageContent' element={<ManageContent />} /> */}

          {/* Catch-all Route for Undefined Paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
