import logo from './logo.svg';
import './App.css';
import Login from './pages/loginPage/Login';
import NavigationBar from './components/NavigationBar';
import Home from './components/homePage/Home';

function App() {
  return (
    <>
    <NavigationBar/>
    <Login/>
    <Home/>
    </>
  );
}

export default App;
