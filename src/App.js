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

import {HOME,ALL_SCHEMES,LOGIN,FORM,LEARN,ABOUT,ADMIN,PROFILE,SCHEME} from './URL'
function App() {
  return (
    <>
    <BrowserRouter>
   <Header/>
   <Routes>
   <Route exact path={HOME} element={<HeroSection/>}/>
   <Route exact path={ALL_SCHEMES} element={<AllSchemes/>}/>
   <Route exact path={SCHEME} element={<SingleSchemePage/>}/>
   <Route exact path={FORM} element={<SchemeForm/>}/>
   <Route exact path={PROFILE} element={<UserProfilePage/>}/>
   <Route exact path={LOGIN} element={<LoginPage/>}/>
 <Route exact path={LEARN} element={<Learn/>}/>
   <Route exact path={ABOUT} element={<AboutUs/>}/>
   <Route exact path={ADMIN} element={<GovernmentProfile/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </>
  );
}

export default App;
