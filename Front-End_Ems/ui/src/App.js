import './App.css';
import Employelist from './Components/employelist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
       
        <Routes>
          <Route path='/' element={<Employelist />} />
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
