// Registration start...
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
// cart start
// import data from "./components/back/Data/Data";
// import Header from "./components/front/Header/Header";
// cart end



// registration start...
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginUser = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('id')) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <div className="App">
      <h1> </h1>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );

}
 
export default App;
