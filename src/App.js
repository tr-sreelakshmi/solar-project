
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Aboutmain from './Pages/About/Aboutmain';
import ServiceMain from './Pages/Services/ServiceMain';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Products/Product';
import Quote from './Pages/quote/Quote';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
   
<Route path='/' element={<Home/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='*' element={<Blog/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/about-main' element={<Aboutmain/>}/>
 <Route path='/service-main' element={<ServiceMain/>}/>
<Route path='/services' element={<Services/>}/> 
<Route path='/contact' element={<Contact/>}/> 
<Route path='/product' element={<Product/>}/> 
<Route path='/quote' element={<Quote/>}/> 

  
         </Routes>
             
      <Footer/>
    </div>
  );
}

export default App;
