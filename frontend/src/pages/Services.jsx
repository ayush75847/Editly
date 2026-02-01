import React from 'react';
import Navbar from '../components/Navbar';
import { Code, Sparkles, Zap, Play, MessageSquare, Shield, Rocket } from 'lucide-react';

const Services = () => {
    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

                {/* Hero Section */}
                <div className="pt-20 pb-16 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Powerful AI-driven features designed to supercharge your coding workflow
                        </p>
                    </div>
                </div>

                {/* Main Services Grid */}
                <div className="max-w-6xl mx-auto px-4 pb-20">

                    <div className="grid md:grid-cols-2 gap-8 mb-12">

                        {/* AI Code Review */}
                        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105 duration-300">
                            <div className="bg-purple-600/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Sparkles className="w-10 h-10 text-purple-300" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">AI Code Review</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                Get instant, intelligent code reviews powered by Google Gemini AI.
                                Identify bugs, security vulnerabilities, and code quality issues in seconds.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Detect potential bugs and errors</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Identify security vulnerabilities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Check best practices compliance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Performance optimization suggestions</span>
                                </li>
                            </ul>
                        </div>

                        {/* AI Code Fixing */}
                        <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-2xl p-8 border border-green-500/30 hover:border-green-500/60 transition-all hover:scale-105 duration-300">
                            <div className="bg-green-600/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="w-10 h-10 text-green-300" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">AI Code Fixing</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                Let AI automatically fix your code issues. Get improved, optimized code
                                that follows best practices with a single click.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Automatic syntax error correction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Logic issue resolution</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Code structure improvements</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Error handling implementation</span>
                                </li>
                            </ul>
                        </div>

                        {/* AI Assistant */}
                        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500/60 transition-all hover:scale-105 duration-300">
                            <div className="bg-blue-600/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <MessageSquare className="w-10 h-10 text-blue-300" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">AI Assistant</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                Ask anything about your code! Get instant answers, explanations, and
                                guidance from our intelligent AI assistant with full code context.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Context-aware code explanations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Debugging help and suggestions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Algorithm optimization tips</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Best practice recommendations</span>
                                </li>
                            </ul>
                        </div>

                        {/* Code Execution */}
                        <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-500/60 transition-all hover:scale-105 duration-300">
                            <div className="bg-orange-600/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                <Play className="w-10 h-10 text-orange-300" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Code Execution</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                Run your code instantly in the browser. Support for multiple programming
                                languages with real-time output display.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Multi-language support (Python, JS, C++, Java, etc.)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Instant execution with Piston API</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Real-time output display</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2"></div>
                                    <span className="text-gray-400">Error detection and reporting</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Additional Features */}
                    <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-gray-700">
                        <h2 className="text-3xl font-bold mb-8 text-center">More Features</h2>
                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="text-center">
                                <div className="bg-indigo-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Code className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Monaco Editor</h3>
                                <p className="text-gray-400">
                                    Professional code editor with syntax highlighting, IntelliSense,
                                    and keyboard shortcuts.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-pink-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Shield className="w-8 h-8 text-pink-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
                                <p className="text-gray-400">
                                    Your code is secure with user authentication and
                                    encrypted project storage.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-cyan-600/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Rocket className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Fast & Reliable</h3>
                                <p className="text-gray-400">
                                    Lightning-fast performance with cloud-based project management
                                    and auto-save.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Services;