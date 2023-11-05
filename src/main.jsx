import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router/Routes';
import './index.css'
import {RouterProvider} from "react-router-dom";
import AuthProviders from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
     <AuthProviders>
     <RouterProvider router={router} />
    </AuthProviders>
    
  </React.StrictMode>,
  </div>
)
