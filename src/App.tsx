import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VirtualOffices from './pages/VirtualOffices';
import MeetingRooms from './pages/MeetingRooms';
import ServicedOffices from './pages/ServicedOffices';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virtual-offices" element={<VirtualOffices />} />
            <Route path="/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/serviced-offices" element={<ServicedOffices />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
