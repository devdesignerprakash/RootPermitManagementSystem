import logo from './logo.svg';
import './App.css';
import Login from './pages/loginPage/Login';
import NavigationBar from './components/NavigationBar';
import Home from './pages/homePage/Home';
import Registration from './pages/registrationPage/Registration';

function App() {
  return (
    <>
    <NavigationBar/>
    <Home/>
    </>
  );
}

export default App;
