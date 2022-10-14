import logo from './logo.svg';
import './App.css';
import ReactBootstrap, {Navbar, Button, Container, Nav, NavDropdown, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './component/TopBar';
import TopSlideBar from './component/TopSlideBar';
import PopUpLogin from './component/PopUpLogin';
import PopUpSingUp from './component/PopUpSingUp';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    
    <Router>
   
    <div className="App"></div>
        <Routes>
          <Route exact path="/" element={<TopBar/>}/>
          <Route exact path="PopUpLogin" element={<PopUpLogin/>}/>
          <Route exact path="PopUpSingUp" element={<PopUpSingUp/>}/>
          </Routes>
      
    </Router>
    
  );
}

export default App;
