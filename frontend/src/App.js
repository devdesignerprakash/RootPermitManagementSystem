
import './App.css';
import Login from './pages/loginPage/Login';
import NavigationBar from './components/NavigationBar';
import Home from './pages/homePage/Home';
import Registration from './pages/registrationPage/Registration';
import {Route,Routes, useLocation} from 'react-router-dom';
import LevelPage from './pages/levelPage/LevelPage';
import RootPermit from './pages/rootPermitPage/RootPermit';
import VehiclePanjikaran from './pages/panjikaranPage/VehiclePanjikaran';
function App() {
  const location=useLocation()
  const showNavbarOnPaths = ['/', '/panjikaran', '/rootPermit', '/level'];
  return (
    <>
    {showNavbarOnPaths.includes(location.pathname) && <NavigationBar />}
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/level" element={<LevelPage/>}/>
      <Route exact path="/panjikaran" element={<VehiclePanjikaran/>}/>
      <Route exact path="/rootPermit" element={<RootPermit/>}/>
      </Routes>
    </>
  );
}

export default App;
