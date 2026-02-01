import React from 'react';
import Navbar from '../components/Navbar';
import { Code, Sparkles, Zap } from 'lucide-react';

const About = () => {
    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                
                {/* Hero Section */}
                <div className="pt-20 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            About Our Platform
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Revolutionizing the way developers write and maintain code with AI-powered intelligence
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 pb-20">
                    
                    {/* Story Section */}
                    <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 mb-12">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Our AI-powered code editor was born from a simple idea: what if coding could be smarter, 
                            faster, and more intuitive? We built a platform that combines cutting-edge AI technology 
                            with a powerful code editor to help developers of all skill levels write better code.
                        </p>
                        <p className="text-lg text-gray-300">
                            Powered by Google's Gemini AI, our platform understands your code, identifies issues, 
                            and provides intelligent suggestions in real-time. Whether you're learning to code or 
                            building complex applications, we're here to make your development journey smoother.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <h2 className="text-3xl font-bold mb-8 text-center">What Makes Us Different</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        
                        <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/50 transition">
                            <div className="bg-blue-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">AI-Powered Intelligence</h3>
                            <p className="text-gray-400">
                                Google Gemini AI integration provides real-time code review, bug detection, 
                                and intelligent suggestions.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition">
                            <div className="bg-purple-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <Code className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Modern Editor</h3>
                            <p className="text-gray-400">
                                Built on Monaco Editor with syntax highlighting, auto-completion, 
                                and support for multiple programming languages.
                            </p>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30 hover:border-green-500/50 transition">
                            <div className="bg-green-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Instant Execution</h3>
                            <p className="text-gray-400">
                                Run your code instantly with our integrated execution engine. 
                                See results in real-time without leaving the editor.
                            </p>
                        </div>

                    </div>

                    {/* Tech Stack */}
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-blue-500/30">
                        <h2 className="text-3xl font-bold mb-6 text-center">Built With Modern Technology</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-bold text-lg">React & Monaco Editor</h3>
                                    <p className="text-gray-400">Modern frontend with professional code editing</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-bold text-lg">Google Gemini AI</h3>
                                    <p className="text-gray-400">Advanced AI for code analysis and suggestions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-bold text-lg">Node.js & Express</h3>
                                    <p className="text-gray-400">Robust backend for seamless performance</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                <div>
                                    <h3 className="font-bold text-lg">Piston API</h3>
                                    <p className="text-gray-400">Multi-language code execution engine</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default About;