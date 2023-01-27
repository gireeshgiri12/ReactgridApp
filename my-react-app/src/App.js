import logo from './logo.svg';
import './App.css';
import { HashRouter  as Router, Routes, Route} from "react-router-dom" ;
import { useState, useEffect } from 'react';
import Home from "./components/Home" 
import Grid from "./components/Grid"

function App() {
  const [selectedData, setSelectedData] = useState()
  const saveData = d => setSelectedData(d);
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/grid' element={<Grid />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
