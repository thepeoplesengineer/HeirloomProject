import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PreInterview from './pages/Pre-Interview'; 
import Conversations from './pages/Conversations';
import ErrorPage from './components/Error';      
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/', // Main layout
    element: <MainLayout />, // Use MainLayout for all routes
    errorElement: <ErrorPage />, 
    children: [
      {
        path: '/', // Login page as root path
        element: <Login />,
      },
      {
        path: 'register', // Register route
        element: <Register />,
      },
      {
        path: 'dashboard', // Dashboard route (protected)
        element: <PrivateRoute><Dashboard /></PrivateRoute>, 
      },
      {
        path: 'pre-interview', // Pre-Interview route (protected)
        element: <PrivateRoute><PreInterview /></PrivateRoute>, 
      },
      {
        path: 'conversation', // Conversations route (protected)
        element: <PrivateRoute><Conversations /></PrivateRoute>, 
      },
      {
        path: 'profile', // Profile route (protected)
        element: <PrivateRoute><Profile /></PrivateRoute>, 
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;


