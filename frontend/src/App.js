
import './App.css';
import Login from './pages/loginPage/Login';
import NavigationBar from './components/NavigationBar';
import Home from './pages/homePage/Home';
import Registration from './pages/registrationPage/Registration';
import {Route,Routes, useLocation} from 'react-router-dom';
import LevelPage from './pages/levelPage/LevelPage';
import VehiclePanjikaran from './pages/panjikaranPage/VehiclePanjikaran';
import RoutePermit from './pages/routePermitPage/RoutePermit';
import RenewRoute from './components/RenewRoute';
function App() {
  const location=useLocation()
  const showNavbarOnPaths = ['/', '/panjikaran', '/routePermit', '/level'];
  return (
    <>
    {showNavbarOnPaths.includes(location.pathname) && <NavigationBar />}
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/level" element={<LevelPage/>}/>
      <Route exact path="/panjikaran" element={<VehiclePanjikaran/>}/>
      <Route exact path="/routePermit" element={<RoutePermit/>}/>
      <Route  path="/renew/:ijajatNumber" element={<RenewRoute/>}/>
      </Routes>
    </>
  );
}

export default App;
