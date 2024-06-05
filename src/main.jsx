import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
// import { AuthContext } from './assets/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
