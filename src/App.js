// Registration start...
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';


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
      <h1>App</h1>
      <Routes> 
        <Route path='*' element={isLoggedIn ? 
        <Dashboard /> : <Login logFunction={loginUser}/>} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
   
  );

}
 
export default App;
