import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Nav';
import Home from './Home';
import AboutUs from './AboutUs';
import Team from './component/Team';
import Event from './component/Event';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/team" element={<Team />}></Route>
        <Route exact path="/event" element={<Event />}></Route>
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}



export default App;
