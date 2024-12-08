const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div
                className="container mx-auto px-4 text-center animate-fadeIn"
                style={{ animation: "fadeIn 1s ease-in-out" }}
            >
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-white">  S A V I </h2>
                    <p className="text-gray-400">This is my unique website with only my stuff. </p>
                </div>

                <div className="flex justify-center space-x-6 mb-4">

                    {/*linkedin*/}
                    <a
                        href="www.linkedin.com/in/savindi-layanga-269589264"
                        className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Facebook
                    </a>

                    {/*github*/}
                    <a
                        href="https://github.com/SavindiLayanga"
                        className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Instagram
                    </a>

                    {/*facebook*/}
                    <a
                        href="https://www.facebook.com/profile.php?id=100082799557221&mibextid=ZbWKwL"
                        className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Twitter
                    </a>

                    {/*instagram*/}
                    <a
                        href="https://www.instagram.com/savi_layanga/"
                        className="text-gray-400 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Twitter
                    </a>
                </div>

                <div className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Savindi Layanga. All Rights Reserved.
                </div>
            </div>

            {/* Keyframes for fade-in animation */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
