import logo from './logo.svg';
import './App.css';
import Login from './pages/loginPage/Login';
import NavigationBar from './components/NavigationBar';
import Home from './pages/homePage/Home';
import Registration from './pages/registrationPage/Registration';
import { Router,Route,Routes, useLocation} from 'react-router-dom';

function App() {
  const location=useLocation()
  
  return (
    <>
    {location.pathname === '/' && <NavigationBar />}
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      </Routes>
    </>
  );
}

export default App;
