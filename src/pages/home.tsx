import React from 'react';

import '../styles/home.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-6 lg:px-20">
            {/* Profile Image */}
            <div className="lg:mr-12 mb-8 lg:mb-0">
                <div className="group w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-black-200">
                    <img src="/src/assets/images/proo.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                    />
                </div>
            </div>

            {/* social media */}
            <div className="text-center lg:text-left">
                {/*hello*/}
                <h3 className="text-0.5xl text-gray-800">
                    Hello World.. I'm,
                </h3>
                {/* Name and position */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">SAVINDI LAYANGA</h1>
                <div className="text-lg text-orange-500 mt-2">
                    <p className="inline-block deleting-effect">Front End Developer</p>
                </div>
                {/*description*/}
                <h3 className="text-1xl font-semibold text-gray-800">
                    Welcome to my personal website.
                </h3>

                <div className="mt-6 flex justify-center lg:justify-start gap-4">

                    {/*linkedin*/}
                    <a
                        href="www.linkedin.com/in/savindi-layanga-269589264"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-gray-200 hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>

                    {/*github*/}
                    <a
                        href="https://github.com/SavindiLayanga"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-200 hover:scale-110"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>

                    {/*facebook*/}
                    <a
                        href="https://www.facebook.com/profile.php?id=100082799557221&mibextid=ZbWKwL"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-500 hover:bg-gray-200 hover:scale-110"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook text-xl"></i>
                    </a>

                    {/*instagram*/}
                    <a
                        href="https://www.instagram.com/savi_layanga/"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pink-500 hover:bg-gray-200 hover:scale-110"
                        aria-label="Instagram"
                    >
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;