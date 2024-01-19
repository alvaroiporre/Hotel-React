import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='bookings' element={<Bookings />}/>
        <Route path='cabins' element={<Cabins />}/>
        <Route path='users' element={<Users />}/>
        <Route path='settings' element={<Settings />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App; 