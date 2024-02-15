import './App.css';

import Employeelist from './Components/employelist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
   {/* Assuming Header is a component */}
      <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href='#'> Employe Managenment System </a>
      </nav>
  

      <Router>
        <Routes>
          <Route path='/' element={<Employeelist />} />
        </Routes>
       
      </Router>

      <footer className='footer'>
        <span>All rights reserved 2024 by <b><a href='www.google.com'>Anojan.com</a></b></span>
      </footer>
    </>
  );
}

export default App;
