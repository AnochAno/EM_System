import './App.css';
import Employeelist from './Components/employelist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Em from './Components/Employes'
import EditEmployee from './Components/EditEmployee';
import LoginPage from './Components/LoginPage';


function App() {
  return (
    <>
    
      <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href='#'> Employe Managenment System </a>
      </nav><br/><br/>
    

      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<Employeelist />} />
          <Route path="/add-employees" element={<Em />} />
          <Route path ="/Edit-employees" element={<EditEmployee/>}/>
          <Route path='/edit-employees/:id' element={<Em/>}></Route>
        </Routes>
       
      </Router>
     
      <footer className='footer'>
        <span>All rights reserved 2024 by <b><a href='www.google.com'>Anojan.com</a></b></span>
      </footer>
      
    </>
  );
}

export default App;
