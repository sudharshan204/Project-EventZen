import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Birthday from './Birthday/Birthday';
import Book from './Booking/Book';
import SignInSide from './SlideSide/SignInSide'
import SignUp from './Sign/SignUp';
import Corp from './Event/Corp';
import AboutUs from './Aboutus/Aboutus';
import ContactUs from './Contactus/ContactUs';
import Wed from './Wedding/Wed'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Nav/>}>
        <Route index element={<SignInSide/>}/>
        <Route path='/s' element={<SignUp/>}/>
        <Route path='/w' element={<Wed/>}/>
        <Route path='/b' element={<Birthday/>}/>
        <Route path='/c' element={<Corp/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/h' element={<Home/>}/>
        <Route path='/a' element={<AboutUs/>}/>
        <Route path='/co' element={<ContactUs/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
