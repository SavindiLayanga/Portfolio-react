import React from 'react';
import '../assets/images/logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#F4F6FF] py-3 px-8 flex justify-between items-center z-10 transition-all duration-300">
            <div className="navbar-logo">
                <a href="/">
                    <img src="/src/assets/images/logo.png" alt="Logo" className="h-16" />
                </a>
            </div>
            <div className="navbar-menu">
                <ul className="flex list-none">
                    <li className="mx-4">
                        <a href="#about" className="text-[#939185] text-lg font-bold hover:underline">BIOGRAPHY</a>
                    </li>
                    <li className="mx-4">
                        <a href="#expertise" className="text-[#939185] text-lg font-bold hover:underline">EXPERTISE</a>
                    </li>
                    <li className="mx-4">
                        <a href="#service" className="text-[#939185] text-lg font-bold hover:underline">SERVICE</a>
                    </li>
                    <li className="mx-4">
                        <a href="#contact" className="text-[#939185] text-lg font-bold hover:underline">CONTACT ME</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
