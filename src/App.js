import './App.css';
import Header from './components/CommonComponents/Header/Header';
import HeroSection from './components/PrimaryComponents/HeroSection/HeroSection';
import Footer from './components/CommonComponents/Footer/Footer';
import AllSchemes from './components/PrimaryComponents/AllSchemes/AllSchemes';
import SingleSchemePage from './components/PrimaryComponents/SingleSchemePage/SingleSchemePage';
import SchemeForm from './components/PrimaryComponents/SchemeForm/SchemeForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
   <Header/>
   <Routes>
   <Route exact path="/" element={<HeroSection/>}/>
   <Route exact path="/AllSchemes" element={<AllSchemes/>}/>
   <Route exact path="/Scheme" element={<SingleSchemePage/>}/>
   <Route exact path="/form" element={<SchemeForm/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </>
  );
}

export default App;
