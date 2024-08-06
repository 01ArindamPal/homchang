import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import ContactUs from './components/contactUs';



function App() {

  return (
    
    <Router>
      <div className="App">
  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<header />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="*" element={<Navigate to="/" />} />
                    
        </Routes>
      </div>
    </Router>

  );
}

export default App;
