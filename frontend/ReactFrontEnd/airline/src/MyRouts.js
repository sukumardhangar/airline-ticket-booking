import { Navigate,Outlet } from 'react-router-dom';

const routes = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to="/login" />,
  },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
  },
];

export default routes;