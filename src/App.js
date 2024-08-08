import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import ContactUs from './components/contactUs';
import Aboutus from './components/aboutUs';

//import AdminPel from './adminSide/admin_login';
import AdminDashboard from './adminSide/admin_home';
import AdminPersonal from './adminSide/admin_PersonalDetails';
import ManageContent from './adminSide/ManageContent';

function App() {

  return (
    
    <Router>
      <div className="App">
  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />

          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/adminHome' element={<AdminDashboard />} />
          <Route path='/adminDetails' element={<AdminPersonal />} />
          <Route path='/manageContent' element={<ManageContent />} /> 

          <Route path="*" element={<Navigate to="/" />} />

          

                    
        </Routes>
      </div>
    </Router>

  );
}

export default App;
