import './App.css';
import Header from './components/CommonComponents/Header/Header';
import HeroSection from './components/PrimaryComponents/HeroSection/HeroSection';
import Footer from './components/CommonComponents/Footer/Footer';
import AllSchemes from './components/PrimaryComponents/AllSchemes/AllSchemes';
import SingleSchemePage from './components/PrimaryComponents/SingleSchemePage/SingleSchemePage';
import SchemeForm from './components/PrimaryComponents/SchemeForm/SchemeForm';
import UserProfilePage from './components/PrimaryComponents/UserProfilePage/UserProfilePage';
import LoginPage from './components/PrimaryComponents/LoginPage/LoginPage';
import Learn from './components/PrimaryComponents/Learn/Learn';
import AboutUs from './components/PrimaryComponents/AboutUs/AboutUs';
import GovernmentProfile from './components/PrimaryComponents/GovernmentProfile/GovernmentProfile';
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
   <Route exact path="/profile" element={<UserProfilePage/>}/>
   <Route exact path="/login" element={<LoginPage/>}/>
   <Route exact path="/learn" element={<Learn/>}/>
   <Route exact path="/about" element={<AboutUs/>}/>
   <Route exact path="/admin" element={<GovernmentProfile/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </>
  );
}

export default App;
