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
import { BrowserRouter,Switch } from "react-router-dom";
import AdminHeader from './components/CommonComponents/AdminHeader/AdminHeader';
import {HOME,ALL_SCHEMES,LOGIN,FORM,LEARN,ABOUT,ADMIN,PROFILE,SCHEME} from './URL'
import PrivateRoute from './components/CustomHook/PrivateRoute';
function App() {
  const headerRoute=window.location.pathname;
  console.log(headerRoute)
  return (
    <>
    <BrowserRouter>
    {
      headerRoute===LOGIN||headerRoute===ADMIN?
       <AdminHeader/>:<Header/>
    }
  
   <Switch>
   <PrivateRoute exact path={HOME} component={HeroSection}/>
   <PrivateRoute exact path={ALL_SCHEMES} component={AllSchemes}/>
   <PrivateRoute exact path={SCHEME} component={SingleSchemePage}/>
   <PrivateRoute exact path={FORM} component={SchemeForm}/>
   <PrivateRoute exact path={PROFILE} component={UserProfilePage}/>
   <PrivateRoute exact path={LOGIN} component={LoginPage}/>
   <PrivateRoute exact path={LEARN} component={Learn}/>
   <PrivateRoute exact path={ABOUT} component={AboutUs}/>
   <PrivateRoute exact path={ADMIN} component={GovernmentProfile}/>
   </Switch>
   <Footer/>
   </BrowserRouter>
  </>
  );
}

export default App;
