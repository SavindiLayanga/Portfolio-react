import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import React Icons

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Here you can handle the form submission
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" id="contact">
            <div className="ml-[10%]">
                <h2 className="text-2xl font-bold text-orange-500 mb-4"> Contact Me</h2>
                <h2 className="text-6xl font-bold text-gray-900 mb-4">Do you <br/> want to contact <br/> me?</h2>
            </div>
            <br/> <br/>

            <div className="rounded-lg shadow-md w-full max-w-6xl flex bg-gray-100 mr-8">
                {/* Left side: Contact Form */}
                <div className="w-full md:w-7/8 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800">SEND ME A MESSAGE</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700">Message *</label>
                            <textarea
                                name="message"
                                className="w-full border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="Write your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-orange-400"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="container mx-auto flex justify-around items-center mt-8">
                    <div className="w-full md:w-1/2 flex flex-col space-y-2">

                        {/* Address Section */}
                        <div className="flex items-center space-x-8 p-4">
                            <div
                                className="flex justify-center items-center w-14 h-14 bg-white text-black rounded-full shadow-lg">
                                <FaMapMarkerAlt className="h-6 w-6"/>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <h3 className="text-lg font-medium text-black">Address</h3>
                                <p className="text-sm font-light text-black">Matara, Sri Lanka</p>
                            </div>
                        </div>

                        {/* Phone Section */}
                        <div className="flex items-center space-x-8 p-4">
                            <div
                                className="flex justify-center items-center w-14 h-14 bg-white text-black rounded-full shadow-lg">
                                <FaPhoneAlt className="h-6 w-6"/>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <h3 className="text-lg font-medium text-black">Phone</h3>
                                <p className="text-sm font-light text-black">+94 77 618 3770</p>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="flex items-center space-x-8 p-4">
                            <div
                                className="flex justify-center items-center w-14 h-14 bg-white text-black rounded-full shadow-lg">
                                <FaEnvelope className="h-6 w-6"/>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <h3 className="text-lg font-medium text-black">E-mail</h3>
                                <p className="text-sm font-light text-black">savindilayanga@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
