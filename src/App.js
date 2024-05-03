import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { DonationForm } from './components/Donation_form';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Donation_form" element={<DonationForm/>} />
      </Routes>
    </Router>
  );
}

export default App;

