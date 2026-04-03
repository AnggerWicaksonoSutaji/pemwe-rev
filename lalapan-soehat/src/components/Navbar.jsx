import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-black text-gradient tracking-tight">Lalapan Soehat</Link>
                    </div>
                    <div className="flex space-x-5">
                        <Link to="/" className="text-slate-500 hover:text-blue-600 font-medium transition-colors duration-200">Beranda</Link>
                        <Link to="/projek-selanjutnya" className="text-slate-500 hover:text-blue-600 font-medium transition-colors duration-200">Next Project</Link>
                        <Link to="https://github.com/AnggerWicaksonoSutaji/lalapan-soehat.git" target="_blank"
                            rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 font-medium transition-colors duration-200">Our Github</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}