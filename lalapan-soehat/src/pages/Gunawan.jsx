import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Gunawan() {
  return (
    <div className="text-slate-800 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-grow pt-32 pb-16 px-4 max-w-6xl mx-auto w-full">
        <Link
          to="/"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors duration-200 font-semibold group px-2"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform duration-300">
            <i className="fas fa-arrow-left text-sm"></i>
          </div>
          Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100/60 transition-all">
          <div className="lg:flex">
            {/* Image */}
            <div className="lg:w-2/5 relative">
              <div className="h-80 sm:h-96 lg:h-full w-full relative group overflow-hidden">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/br-gunawan.jpeg"
                  alt="Gunawan"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:w-3/5 flex flex-col justify-center">
              <div className="mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  MAHASISWA TEKNOLOGI INFORMASI
                </span>
                <h1 className="text-4xl font-bold mt-4">Gunawan</h1>
              </div>

              {/* Tentang Saya */}
              <p className="text-slate-600 mb-4 leading-relaxed font-light">
                Saya adalah mahasiswa aktif Program Studi Teknologi Informasi Universitas Brawijaya yang memiliki
                pengalaman dalam komunikasi, pelayanan pelanggan, serta manajemen acara.
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed font-light">
                Saya terbiasa bekerja dengan cepat, teliti, dan komunikatif melalui pengalaman sebagai MC, moderator,
                kepanitiaan, serta pekerjaan part-time. Saya memiliki etos kerja yang disiplin dan siap berkontribusi
                secara profesional, khususnya dalam pekerjaan part-time selama libur semester.
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex items-center">
                  <i className="fas fa-star text-slate-400 mr-2 text-sm"></i> Keahlian
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Public Speaking
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Pelayanan Pelanggan
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Kerja Sama Tim
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Komunikasi Interpersonal
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Manajemen Acara
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Leadership
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Administrasi Dasar
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Problem Solving
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                    Manajemen Waktu
                  </span>
                </div>
              </div>

              {/* Pendidikan */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 flex items-center">
                  <i className="fas fa-graduation-cap text-slate-400 mr-2 text-sm"></i> Pendidikan
                </h3>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="font-semibold text-slate-800">D3 Teknologi Informasi</p>
                  <p className="text-slate-500 text-sm mt-1">Universitas Brawijaya</p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">2025 - 2029</p>
                </div>
              </div>

              {/* Connect Section */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="text-slate-500 font-semibold mb-4 sm:mb-0">Mari terhubung:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/gunawan-siallagan-0a3a64376?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                  <a
                    href="https://github.com/gunawan-siallagan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-slate-800/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gunawansiallagan_?igsh=aTU5N2toMDNoeHVw&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@anothernawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-slate-800/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-tiktok text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-slate-100 bg-white mt-auto">
        <p className="text-slate-400 font-medium">&copy; {new Date().getFullYear()} BioSpace - Gunawan</p>
      </footer>
    </div>
  );
}
