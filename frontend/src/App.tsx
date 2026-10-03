import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Appointments from "./pages/Appointments";
import Cars from "./pages/Cars";
import Account from "./pages/Account";
import RepairStatus from "./pages/RepairStatus";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/account" element={<Account />} />
        <Route path="/repair-status" element={<RepairStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;