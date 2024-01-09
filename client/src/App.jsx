import React from 'react';
import ProfilePage from './pages/ProfilePage';
import RegistrationPage from './pages/RegistrationPage';
import Navbar from './component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfilePage/>} />
        <Route path='/register' element ={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
};

export default App;