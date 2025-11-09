import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-zinc-900/90 backdrop-blur-md fixed top-0 w-full h-[10vh] flex justify-between items-center px-8 shadow-lg z-50 transition-all duration-300">
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer group">
                <h1 className="text-3xl font-extrabold tracking-wide">
                    <span className="text-emerald-500">&lt;</span>
                    <span className="text-rose-500 group-hover:text-rose-400 transition-colors">Dev</span>
                    <span className="text-white group-hover:text-gray-200 transition-colors">Sujan</span>
                    <span className="text-emerald-500">/&gt;</span>
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
            <div className="md:hidden text-white text-3xl cursor-pointer hover:text-teal-400 transition-colors">
                ☰
            </div>
        </nav>
    )
}

export default Navbar
