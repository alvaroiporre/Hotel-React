import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='bookings' element={<Bookings />}/>
        <Route path='cabins' element={<Cabins />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App; 