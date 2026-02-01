import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields!');
            return;
        }

        setIsSubmitting(true);

        // Simulate sending (you can add actual backend call here)
        setTimeout(() => {
            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

                {/* Hero Section */}
                <div className="pt-20 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Have questions or feedback? We'd love to hear from you!
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 pb-20">

                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 flex flex-col">
                            <div className="p-8 flex-1">
                                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What's this about?"
                                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us what you're thinking..."
                                            rows="8"
                                            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                                            required
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            
                            {/* Button at bottom */}
                            <div className="p-6 bg-gray-900/30 border-t border-gray-700 rounded-b-2xl">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">

                            {/* Contact Details */}
                            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Email</h3>
                                            <p className="text-gray-400">support@aicodeeditor.com</p>
                                            <p className="text-gray-400">contact@aicodeeditor.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Phone</h3>
                                            <p className="text-gray-400">+1 (555) 123-4567</p>
                                            <p className="text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Location</h3>
                                            <p className="text-gray-400">123 Tech Street</p>
                                            <p className="text-gray-400">San Francisco, CA 94105</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30">
                                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 hover:bg-gray-600 w-12 h-12 rounded-lg flex items-center justify-center transition transform hover:scale-110"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-700 hover:bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center transition transform hover:scale-110"
                                    >
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-sky-700 hover:bg-sky-600 w-12 h-12 rounded-lg flex items-center justify-center transition transform hover:scale-110"
                                    >
                                        <Twitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* FAQ Quick Links */}
                            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                                <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                                            → Frequently Asked Questions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                                            → Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                                            → Community Forum
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 transition">
                                            → Report a Bug
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Contact;