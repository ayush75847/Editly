const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

exports.reviewCode = async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code) {
            return res.json({ success: false, message: "Code is required" });
        }

        const prompt = `
        You are an expert code reviewer. Review the following ${language || 'code'} and provide:
        1. Potential bugs or errors
        2. Code quality issues
        3. Best practices violations
        4. Security vulnerabilities
        5. Performance improvements
        6. Suggestions for better code structure

        Code:
        ${code}

        Provide a detailed review with specific line references where applicable.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        const review = response.text; 

        res.json({
            success: true,
            review
        });

    } catch (error) {
        console.error("Review error:", error);
        res.json({
            success: false,
            message: "Failed to review code: " + error.message
        });
    }
};

exports.fixCode = async (req, res) => {
    try {
        const { code, language } = req.body;

        if (!code) {
            return res.json({ success: false, message: "Code is required" });
        }

        const prompt = `You are an expert programmer. Fix and improve the following ${language || 'code'}:

            1. Fix syntax errors
            2. Fix logical issues
            3. Improve structure
            4. Add error handling
            5. Optimize performance
            6. Follow best practices

            Return ONLY the corrected code.

            Original Code:
            ${code}
                `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        const fixedCode = response.text;  // Changed from response.response.text()

        res.json({
            success: true,
            fixedCode
        });

    } catch (error) {
        console.error("Fix code error:", error);
        res.json({
            success: false,
            message: "Failed to fix code: " + error.message
        });
    }
}

exports.askQuestion = async (req, res) => {
    try {
        const { question, code, language } = req.body;

        if (!question) {
            return res.json({ success: false, message: "Question is required" });
        }

        // Sanitize code - remove any extra backticks that might break formatting
        const sanitizedCode = code ? code.replace(/```/g, '') : '';

        // Check if there's actual code to provide as context
        const hasValidCode = sanitizedCode && sanitizedCode.trim() !== "" && sanitizedCode !== "//write your code here";

        const prompt = `You are an expert programming assistant.
         You must ONLY answer questions related to programming, code, software development, and technical topics.
        ${hasValidCode ? `Context: The user is working with the following ${language || 'code'}:
        ${sanitizedCode}
        ` : ''}Question: ${question}

        Rules:
        - Only answer programming-related questions
        - If the question is not related to code/programming, politely decline and ask for a code-related question
        - Use the provided code context to give specific answers
        - Be helpful and precise

        Provide your answer:
            `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt
        });

        const answer = response.text;

        res.json({
            success: true,
            answer
        });

    } catch (error) {
        console.error("Ask question error:", error);
        res.json({
            success: false,
            message: "Failed to get answer: " + error.message
        });
    }
}