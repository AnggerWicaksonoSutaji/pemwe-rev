import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Angger() {
  return (
    <div className="text-slate-800 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Biografi Content */}
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors duration-200 font-semibold group px-2"
        >
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform duration-300">
            <i className="fas fa-arrow-left text-sm"></i>
          </div>
          Kembali ke Beranda
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100/60 transition-all">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-2/5 relative">
              <div className="h-80 sm:h-96 lg:h-full w-full relative group overflow-hidden">
                <img
                  className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/pp-angger.jpeg"
                  alt="Angger"
                />
                {/* Mobile Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-0 left-0 p-6 lg:hidden w-full">
                  <div className="inline-block px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold tracking-wider mb-2">
                    UI/UX DESIGNER
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-1">Angger</h1>
                </div>
              </div>
            </div>

            {/* Detail Content Section */}
            <div className="p-8 sm:p-12 lg:p-14 lg:w-3/5 flex flex-col justify-center relative">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 p-8 hidden lg:block opacity-10">
                <i className="fas fa-quote-right text-6xl text-slate-400"></i>
              </div>

              {/* Title for Desktop */}
              <div className="hidden lg:block mb-8">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wider mb-4 border border-blue-100">
                  FRONTEND
                </div>
                <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Angger</h1>
              </div>

              {/* Bio Description */}
              <div className="prose prose-lg text-slate-600 mb-10 leading-relaxed font-light">
                <p className="mb-4">
                  Halo! Saya Angger Wicaksono Sutaji, seorang pengembang web dan antusias kecerdasan buatan (AI) yang
                  bersemangat. Saya percaya bahwa teknologi yang luar biasa tidak hanya harus berfungsi secara teknis,
                  tetapi juga menyelesaikan masalah pengguna dengan cara yang paling organik dan intuitif.
                </p>
                <p>
                  Berbekal latar belakang pendidikan (D3) Teknologi Informasi di Universitas Brawijaya, dedikasi saya
                  terletak pada penciptaan ekosistem aplikasi web yang aksesibel serta implementasi solusi berbasis AI.
                  Saya menikmati mengubah kompleksitas baris kode dan algoritma menjadi sesuatu yang sederhana, elegan,
                  dan berdampak positif bagi keseharian penggunanya.
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {/* Skills */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                    <i className="fas fa-magic mr-2"></i>Minat
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                      AI
                    </span>
                    <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                      musik
                    </span>
                    <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                      web programming
                    </span>
                    <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                      iot
                    </span>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                    <i className="fas fa-graduation-cap mr-2"></i> Pendidikan
                  </h3>
                  <div className="relative pl-4 border-l-2 border-blue-200">
                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <h4 className="text-slate-800 font-bold">D3 Teknologi Informasi</h4>
                    <p className="text-slate-500 text-sm mt-1">Universitas brawijaya</p>
                    <p className="text-slate-400 text-xs mt-1 font-medium">2025-2028</p>
                  </div>
                </div>
              </div>

              {/* Connect Section */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="text-slate-500 font-semibold mb-4 sm:mb-0">Mari terhubung:</span>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/angger-wicaksono-sutaji-745984377/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                  <a
                    href="https://github.com/AnggerWicaksonoSutaji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-slate-800/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/angger.wcksno/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-1"
                  >
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@heisnbergo"
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
      <footer className="py-10 text-center relative z-10 border-t border-slate-100 bg-white mt-auto">
        <p className="text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} BioSpace. Dibuat dengan cinta untuk tugas biografi.
        </p>
      </footer>
    </div>
  );
}