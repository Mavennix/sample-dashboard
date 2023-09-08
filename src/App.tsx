import './App.scss';
import AdminDashboard from './ui/admin-portal/dashboard';
import UserLogin from './ui/user-portal/auth/login';
import UserSignUp from './ui/user-portal/auth/signup';
import UserDashboard from './ui/user-portal/dashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement,);

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserSignUp />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },

  {
    path: "/user-dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
