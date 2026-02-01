import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/';
import Editor2 from '@monaco-editor/react';
import { api_base_url } from '../helper';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Editor = () => {
    const [code, setCode] = useState("//write your code here");
    let { id } = useParams();
    const [output, setOutput] = useState("");
    const [error, setError] = useState(false);

    // AI states
    const [aiResponse, setAiResponse] = useState("");
    const [isReviewLoading, setIsReviewLoading] = useState(false);
    const [isFixLoading, setIsFixLoading] = useState(false);
    const [isAskLoading, setIsAskLoading] = useState(false);
    const [userQuestion, setUserQuestion] = useState("");

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(api_base_url + "/getProject", {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                projectId: id,
                token: localStorage.getItem("token")
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCode(data.project.code);
                    setData(data.project);
                } else {
                    toast.error(data.message);
                }
            })
            .catch(err => {
                toast.error("Failed to load project");
                console.error(err);
            });
    }, [id]);

    const saveProject = () => {
        fetch(api_base_url + "/saveProject", {
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: localStorage.getItem("token"),
                projectId: id,
                code: code
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) toast.success(data.msg);
                else toast.error(data.msg);
            })
            .catch(err => {
                toast.error("Failed to save project");
                console.error(err);
            });
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                saveProject();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);

    }, [code, id]); 

    const runProject = () => {
        if (!data) {
            toast.error("Project data not loaded yet");
            return;
        }

        fetch("https://emkc.org/api/v2/piston/execute", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                language: data.projLanguage,
                version: data.version,
                files: [
                    {
                        filename:
                            data.name +
                            "." +
                            (
                                data.projLanguage === "python" ? "py" :
                                    data.projLanguage === "javascript" ? "js" :
                                        data.projLanguage === "cpp" ? "cpp" :
                                            data.projLanguage === "c" ? "c" :
                                                data.projLanguage === "java" ? "java" :
                                                    data.projLanguage === "bash" ? "sh" : ""
                            ),
                        content: code
                    }
                ]
            })
        })
            .then(res => res.json())
            .then(data => {
                setOutput(data.run.output);
                setError(data.run.code === 1);
            })
            .catch(err => {
                toast.error("Failed to run code");
                console.error(err);
            });
    };

    // ----------------- AI REVIEW -----------------
    const handleReview = async () => {
        if (!code || code === "//write your code here") {
            toast.warning("Please write some code first!");
            return;
        }

        setIsReviewLoading(true);
        setIsFixLoading(false);
        setAiResponse("Reviewing your code...");

        try {
            const response = await fetch(api_base_url + "/ai/reviewCode", {
                mode: "cors",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: code,
                    language: data?.projLanguage,
                    token: localStorage.getItem("token")
                })
            });

            const result = await response.json();

            if (result.success) {
                setAiResponse(result.review);
            } else {
                setAiResponse(result.message);
                toast.error(result.message);
            }
        } catch (err) {
            setAiResponse("Error reviewing code. Please try again.");
            toast.error("Failed to review code");
            console.error(err);
        } finally {
            setIsReviewLoading(false);
        }
    };

    // ----------------- AI FIX -----------------
    const handleFixCode = async () => {
        if (!code || code === "//write your code here") {
            toast.warning("Please write some code first!");
            return;
        }

        setIsFixLoading(true);
        setIsReviewLoading(false);
        setAiResponse("Fixing your code...");

        try {
            const response = await fetch(api_base_url + "/ai/fixCode", {
                mode: "cors",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code: code,
                    language: data?.projLanguage,
                    token: localStorage.getItem("token")
                })
            });

            const result = await response.json();

            if (result.success) {
                setAiResponse(result.fixedCode);
            } else {
                setAiResponse(result.message);
                toast.error(result.message);
            }
        } catch (err) {
            setAiResponse("Error fixing code. Please try again.");
            toast.error("Failed to fix code");
            console.error(err);
        } finally {
            setIsFixLoading(false);
        }
    };

    // Helper function to map language names to Piston editor language IDs
    const getMonacoLanguage = (lang) => {
        const languageMap = {
            'python': 'python',
            'javascript': 'javascript',
            'cpp': 'cpp',
            'c': 'c',
            'java': 'java',
            'bash': 'shell'
        };
        return languageMap[lang] || 'plaintext';
    };

    const handleAskQuestion = async () => {
        if (!userQuestion.trim()) {
            toast.warning("Please enter a question!");
            return;
        }

        setIsAskLoading(true);
        setIsReviewLoading(false);
        setIsFixLoading(false);
        setAiResponse("Thinking...");

        try {
            const response = await fetch(api_base_url + "/ai/askQuestion", {
                mode: "cors",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question: userQuestion,
                    code: code,
                    language: data?.projLanguage,
                    token: localStorage.getItem("token")
                })
            });

            const result = await response.json();

            if (result.success) {
                setAiResponse(result.answer);
                setUserQuestion(""); // Clear input
            } else {
                setAiResponse(result.message);
                toast.error(result.message);
            }
        } catch (err) {
            setAiResponse("Error getting answer. Please try again.");
            toast.error("Failed to get answer");
            console.error(err);
        } finally {
            setIsAskLoading(false);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAskQuestion();
        }
    };

    return (
        <>
            <Navbar />

            <div className="flex items-start justify-between" style={{ height: "calc(100vh - 90px)" }}>

                {/* LEFT: Code Editor */}
                <div className="w-[55%] h-full flex flex-col bg-[#1e1e1e] border-r-2 border-black">

                    {/* Toolbar */}
                    <div className="editor-toolbar bg-[#252526] px-4 py-3 flex items-center justify-between border-b-2 border-black">
                        <h3 className="text-white text-xl font-extrabold">WorkSpace</h3>

                        <div className="flex items-center gap-3">
                            {/* Review Button */}
                            <button
                                onClick={handleReview}
                                disabled={isReviewLoading || isFixLoading}
                                className="px-4 py-2 bg-purple-600 rounded-md text-white text-sm font-semibold hover:bg-purple-700 disabled:opacity-50 transition"
                            >
                                {isReviewLoading ? "⏳ Reviewing..." : "🔍 Review"}
                            </button>

                            {/* Fix Button */}
                            <button
                                onClick={handleFixCode}
                                disabled={isFixLoading || isReviewLoading}
                                className="px-4 py-2 bg-green-600 rounded-md text-white text-sm font-semibold hover:bg-green-700 disabled:opacity-50 transition"
                            >
                                {isFixLoading ? "⏳ Fixing..." : "✨ Fix Code"}
                            </button>
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="flex-1 pt-1">
                        <Editor2
                            onChange={newCode => setCode(newCode)}
                            theme="vs-dark"
                            height="100%"
                            language={data ? getMonacoLanguage(data.projLanguage) : 'python'}
                            value={code}
                        />
                    </div>
                </div>

                {/* MIDDLE: Output */}
                <div className="output p-[15px] w-[20%] h-full bg-[#27272a] border-r-2 border-black">
                    <div className="flex pb-3 border-b border-[#1e1e1f] items-center justify-between px-[30px]">
                        <h3 className="text-lg font-bold">Output</h3>
                        <button onClick={runProject} className="px-5 py-2 bg-blue-500 rounded-md text-white text-sm font-semibold">
                            Run
                        </button>
                    </div>

                    <pre className={`p-3 mt-2 bg-[#1e1e1e] rounded-md whitespace-pre-wrap ${error ? "text-red-500" : "text-white"}`}>
                        {output}
                    </pre>
                </div>

                {/* RIGHT: AI Response */}
                <div className="ai w-[25%] h-full p-[15px] bg-[#1c1c1e] flex flex-col">
                    <h3 className="text-white text-lg font-bold pb-3 border-b-2 border-black mb-3">Response</h3>

                    {/* AI Response Area */}
                    <div className="flex-1 overflow-y-auto mb-4">
                        <pre className="text-white text-sm whitespace-pre-wrap break-words font-sans leading-relaxed">
                            {aiResponse || <span className="text-lg font-bold text-gray-400">Click Review or Fix Code to see AI suggestions..</span>}
                        </pre>
                    </div>

                    {/* Ask Anything Section - NOW INSIDE THE AI DIV */}
                    <div className="border-t-2 border-black pt-3">
                        <label className="text-white text-xs font-semibold mb-2 block">Ask Anything</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={userQuestion}
                                onChange={(e) => setUserQuestion(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about your code..."
                                disabled={isAskLoading || isReviewLoading || isFixLoading}
                                className="flex-1 px-3 py-2 bg-[#2d2d30] text-white text-sm rounded-md border border-gray-600 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                            />
                            <button
                                onClick={handleAskQuestion}
                                disabled={isAskLoading || isReviewLoading || isFixLoading}
                                className="px-4 py-2 bg-blue-600 rounded-md text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
                            >
                                {isAskLoading ? "⏳" : "→"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Editor;