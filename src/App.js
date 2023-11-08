import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
