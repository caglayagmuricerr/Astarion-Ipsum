import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import  './styles/Generic.css';
import './styles/Images.css';
import './styles/Animations.css';

import Binary from './components/pages/Binary';
import Home from './components/pages/Home';
import FouroFour from './components/pages/FouroFour'

import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Credits from './components/ui/Credits';

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Footer />
            </>
          } />
          <Route path="/binary" element={
            <>
              <Binary />
              <Footer />
            </>
          } />
          <Route path="/credits" element={
            <>
              <Credits />
              <Footer />
            </>
          } />
          <Route path="/*" element={<FouroFour/>}/> {/* if path doesn't exist route to here*/}
        </Routes>
      </Router>
    </main>
  );
}

export default App;