import './App.css';
import Employelist from './Components/employelist'
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' element = {Employelist}></Route>
          </Routes>

        <Employelist />
        <Footer />
      </Router>
    </>
  );
}

export default App;
