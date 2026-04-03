import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ProjekSelanjutnya() {
  return (
    <div className="text-slate-800 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
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

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 sm:p-12 border border-slate-100/60 min-h-[500px] flex flex-col relative overflow-hidden">
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <i className="fas fa-rocket text-8xl text-slate-400"></i>
          </div>

          <div className="mb-10 text-center border-b border-slate-100 pb-8 relative z-10">
            <div className="inline-block px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-bold tracking-wider mb-4 border border-purple-100">
              COMING SOON
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Fit In
            </h1>
            <p className="text-slate-500 text-lg">projek selanjutnya yang akan kami kerjakan</p>
          </div>

          {/* Blank area for writing */}
          <div className="prose prose-lg prose-slate max-w-none flex-grow text-slate-600 leading-relaxed font-light relative z-10">
            {/* Tulis konten projek selanjutnya di bawah baris ini */}
            <p>
              Fit in adalah sebuah platform berbasis website yang dirancang sebagai asisten personal digital
              komprehensif untuk membantu pengguna mencapai komposisi tubuh ideal, sekaligus menjadi langkah
              preventif terhadap risiko penyakit metabolik. Hadir di tengah gaya hidup modern yang serba instan,
              Fit in menjembatani kebutuhan masyarakat akan panduan nutrisi dan olahraga yang terukur, personal,
              dan mudah diakses.
            </p>
            {/* Anda bisa menambahkan heading, paragraf, daftar, gambar dll di bawah sini */}
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
