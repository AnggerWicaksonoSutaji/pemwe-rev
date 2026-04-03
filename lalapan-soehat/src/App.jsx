import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Angger from './pages/Angger';
// Import halaman lain jika sudah kamu buat
import Gunawan from './pages/Gunawan';
import Fani from './pages/Fani';
import ProjekSelanjutnya from './pages/ProjekSelanjutnya';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/angger" element={<Angger />} />
        {/* Hapus komentar di bawah jika file halamannya sudah dibuat */}
        <Route path="/Gunawan" element={<Gunawan />} />
        <Route path="/gunawan" element={<Gunawan />} />
        <Route path="/fani" element={<Fani />} />
        <Route path="/projek-selanjutnya" element={<ProjekSelanjutnya />} />
      </Routes>
    </Router>
  );
}

export default App;