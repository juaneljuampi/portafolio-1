import logo from './logo.svg';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
function App() {
  return (
    <router>
      <router>
        <route path="/" element={<Home />} />
      </router>
    </router>
    
  );
}

export default App;
