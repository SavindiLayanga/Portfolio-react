import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-6 lg:px-20">
            {/* Profile Image */}
            <div className="lg:mr-12 mb-8 lg:mb-0">
                <div className="group w-40 h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-gray-200">
                    <img src="/src/assets/images/propic.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
                    />
                </div>
            </div>

            {/* social media */}
            <div className="text-center lg:text-left">
                {/* Name and position */}
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">SAVINDI LAYANGA</h1>
                <p className="text-lg text-gray-500 mt-2">Front End Developer</p>

                <div className="mt-6 flex justify-center lg:justify-start gap-6">
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-gray-200"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-200"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-500 hover:bg-gray-200"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook text-xl"></i>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-pink-500 hover:bg-gray-200"
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