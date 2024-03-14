import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './output.css'
import App from './App';
import RegisterPageDetails from './EditForms';
import NewForms from './newForms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RegisterPageDetails/>
   {/* <NewForms/> */}
  </React.StrictMode>
);



