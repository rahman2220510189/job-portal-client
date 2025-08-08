import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './LayOut/MainLayout';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import AuthProvider from './contex/AuthContex/AuthProvider';
import SignIn from './pages/SignIn/SignIn';
import JobDetails from './pages/JobDetails/JobDetails';
import PrivateRouter from './Router/PrivateRouter';
import JobApply from './pages/JobApply/JobApply';
import MyApplication from './pages/MyApplication/MyApplication';
import Addjob from './pages/AddJob/Addjob';
import MyPostedJob from './pages/MyPostedJob/MyPostedJob';
import ViewApplication from './pages/ViewApplication/ViewApplication';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<h1>Route not found</h1>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/jobs/:id',
        element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRouter><JobApply></JobApply></PrivateRouter>,
      },
      {
        path:'/myApplication',
        element:<PrivateRouter><MyApplication></MyApplication></PrivateRouter>,
      },
      {
         path:'/addJob',
         element:<PrivateRouter><Addjob></Addjob></PrivateRouter>,
      },
      {
        path:'/myPostedJobs',
        element:<PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>,

      },
      {
        path:'/viewApplication/:job_id',
        element:<PrivateRouter><ViewApplication></ViewApplication></PrivateRouter>,
        loader: ({params}) => fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)


      },
      {
        path:'/register',
        element:<Register></Register>,
        
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
