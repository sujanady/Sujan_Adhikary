import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-zinc-900/90 backdrop-blur-md fixed top-0 w-full h-[10vh] flex justify-between items-center px-8 shadow-lg z-50 transition-all duration-300">
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer group select-none">
    <h1 className="text-2xl font-black tracking-tight transition-all duration-300 ease-in-out group-hover:scale-105 drop-shadow-md">
        <span className="text-blue-500 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300">&lt;</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400 group-hover:from-violet-400 group-hover:to-purple-300 transition-all duration-300">Dev</span>
        <span className="text-slate-100 group-hover:text-white transition-colors duration-300">Sujan</span>
        <span className="text-blue-500 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300">/&gt;</span>
    </h1>
</div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-10 text-lg font-semibold text-gray-200">
                {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                    <li
                        key={item}
                        className="relative cursor-pointer px-3 py-1 rounded-lg transition-all duration-300 hover:text-orange-400 hover:bg-teal-600/20"
                    >
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div 
                className="md:hidden text-white text-3xl cursor-pointer hover:text-teal-400 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '✕' : '☰'}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-[10vh] left-0 w-full bg-zinc-900/95 backdrop-blur-md shadow-xl md:hidden flex flex-col items-center py-6 gap-6 transition-all duration-300 border-t border-zinc-800">
                    {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                        <span
                            key={item}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-semibold text-gray-200 cursor-pointer hover:text-orange-400 hover:scale-105 transition-all duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
