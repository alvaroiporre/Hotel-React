import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import Bookings from "./pages/Bookings";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />}/>
        <Route path='bookings' element={<Bookings />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App; 