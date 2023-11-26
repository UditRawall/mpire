import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Modal from './components/Modal/Modal';
import LoginPage from './components/login/isLoggedIn';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" exact element={<Modal/>}/>
      <Route path="/Login" exact element={<LoginPage/>}/>
      
      </Routes>
    </Router></div>
  );
}

export default App;
