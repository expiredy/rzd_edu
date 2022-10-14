import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';


import PageComponent from '../interfaces/pageComponent';


function Plug(){
  return (<div></div>)

const pages = [{path: "/about", element: <Plug />, label_element: <h2>О НАС</h2>},
             {path: "/rates", element: <Plug />, label_element: <h2>ТАРИФЫ</h2>},
             {path: "/test", element: <Plug />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/group.svg'} alt='unused-button' />},
             {path: "/", element: <Plug />, label_element: <img src={process.env.PUBLIC_URL + '/navigation_bar_assets/profile_logo.svg'} alt='profile-button'/>} ];


function App() {
  return (
      <div >
          <Routes>
          {pages.map((page: PageComponent) => (
              <Route path={page.path} element={page.element}> </Route>     
          ))}
          </Routes>
      </div>
  );
};

export default App;