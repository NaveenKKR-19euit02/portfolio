
import './App.css';
import {Home,About,Education,Technical,Contact} from './Components/Home'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nopage from './Components/Nopage';
import Layout from './Components/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Technical' element={<Technical/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*'element={<Nopage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

