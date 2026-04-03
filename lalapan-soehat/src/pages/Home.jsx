import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="text-slate-800 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden bg-slate-50">
            <Navbar />

            <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-4 w-full">
                <div className="w-full max-w-5xl bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-6 lg:p-14 relative shadow-2xl shadow-blue-900/5 ring-1 ring-slate-200/50">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">Lalapan Soehat group</h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Kenali lebih dekat tim kami<br /> Geser dan klik untuk membaca biografi mereka.</p>
                    </div>

                    <div className="relative group" id="slider-container">
                        <div className="overflow-hidden rounded-3xl relative mx-auto max-w-lg md:max-w-3xl">
                            {/* Track Slider dengan style dinamis React */}
                            <div
                                className="flex w-full transition-transform duration-600 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {/* Slide 1: Angger */}
                                <div className="w-full shrink-0 flex justify-center p-4">
                                    <Link to="/angger" className="block w-full max-w-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-3 group/card relative bg-white">
                                        <div className="relative h-96 overflow-hidden">
                                            <img src="/br-angger.jpeg" alt="Angger" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold tracking-wider mb-3">FRONTEND DEV</div>
                                            <h3 className="text-white text-3xl font-bold tracking-tight mb-1">Angger Wicaksono</h3>
                                        </div>
                                    </Link>
                                </div>

                                {/* Slide 2: Gunawan */}
                                <div className="w-full shrink-0 flex justify-center p-4">
                                    <Link to="/gunawan" className="block w-full max-w-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-3 group/card relative bg-white">
                                        <div className="relative h-96 overflow-hidden">
                                            <img src="/pp-gunawan.jpeg" alt="Gunawan" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="inline-block px-3 py-1 bg-purple-500 text-white rounded-full text-xs font-semibold tracking-wider mb-3">BACKEND DEV</div>
                                            <h3 className="text-white text-3xl font-bold tracking-tight mb-1">Gunawan Siallagan</h3>
                                        </div>
                                    </Link>
                                </div>

                                {/* Slide 3: Fani */}
                                <div className="w-full shrink-0 flex justify-center p-4">
                                    <Link to="/fani" className="block w-full max-w-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform md:hover:-translate-y-3 group/card relative bg-white">
                                        <div className="relative h-96 overflow-hidden">
                                            <img src="/fani-pp.jpg" alt="Fani" className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="inline-block px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-semibold tracking-wider mb-3">UI/UX</div>
                                            <h3 className="text-white text-3xl font-bold tracking-tight mb-1">Achmad Fani</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Navigasi */}
                        <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white/90 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 z-10">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white/90 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 z-10">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}