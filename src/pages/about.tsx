import React from 'react';
import '../styles/about.css';

const AboutSection: React.FC = () => {
    return (
        <div className="bg-white py-16 px-8" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="block"> {/* Added 'block' class for animation */}
                    <h2 className="text-2xl font-bold text-orange-500 mb-6">About Me</h2>
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">Who Am I?</h2>
                    <p className="text-gray-500" style={{ fontSize: '20px', fontFamily: 'Arial, sans-serif' }}>
                        I am a Front End Developer
                    </p>
                    <br />
                    <p className="text-gray-600 fa-align-justify">
                        My journey in the world of technology began at Matara Mahinda Rajapakse College, where I successfully completed my General Level (O/L) in 2018 and Advanced Level (A/L) in 2021.
                    </p>
                    <br />
                    <p className="text-gray-600 fa-align-justify">
                        Currently, I am pursuing my studies at the Panadura Institute of Software Engineering (IJSE), where I am dedicated to honing my skills and expanding my knowledge in the field. I have a solid foundation in HTML, CSS, and JavaScript, and I excel at transforming design concepts into fully functional and aesthetically pleasing web interfaces. Additionally, I possess a good understanding of Java, although my true passion lies in the design aspects of software development.
                    </p>
                    <br />
                    <p className="text-gray-600 fa-align-justify">
                        Renowned for my innovative approach to design and my dedication to crafting seamless user experiences, I am continuously exploring new technologies and best practices to keep pace with the rapidly evolving field of web development.
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-2 mb-5">
                    <img
                        src="/src/assets/aboutpic/aboutimage.jpg"
                        alt="Profile"
                        className="w-80 h-100 object-cover border-4 border-black shadow-lg custom-hover-effect"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
