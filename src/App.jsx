import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import ContextApi from './contexts/ContextApi';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ContextApi> 
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </ContextApi>
  );
}

export default App;
