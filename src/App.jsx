import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Job from './pages/Job';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './pages/Service';
import ApplicationForm from './components/ApplicationForm';
import ThankYou from './components/ThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { useLocation } from 'react-router-dom';

const App = () => {
  const excludedRoutes = ['/QuerySuccessfull', '/ApplicationSubmittedSuccessfully'];


  return (
    <>
    <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />}/>
        <Route path='/About' element={<AboutUs />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Service/:serviceId" element={<Service />} />
        <Route path="/Careers/:title/:id" element={<Job />} />
        <Route path="/JobApplicationForm/:id" element={<ApplicationForm />} />
        <Route path="/ApplicationSubmittedSuccessfully/:id" element={<ThankYou />} />
        <Route path="/QuerySuccessfull" element={<ThankYou />} />
        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
  </BrowserRouter>
   <Footer />
    </>
  )
}

export default App;