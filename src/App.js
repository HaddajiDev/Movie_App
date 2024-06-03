import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Components/NavBarr';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import MovieInfo from './Components/MovieInfo';

function App() {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/movie/:imdbID' element={<MovieInfo />} />
      </Routes>
    </div>
  );
}

export default App;
