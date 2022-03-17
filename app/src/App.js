import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import ErrorPage from './components/ErrorPage';
import Navbar from './Navbar/Navbar';
import './Navbar.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bitcoin" element={<Bitcoin />} />
          <Route path="/Ethereum" element={<Ethereum />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
