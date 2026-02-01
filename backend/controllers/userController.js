const userModel = require("../models/userModel");
const projectModel = require("../models/projectModel");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

function getStartupCode(language) {
    language = language.toLowerCase();

    if (language === "python") {
        return `print("Hello, World!")`;
    }
    else if (language === "java") {
        return `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
    }
    else if (language === "cpp") {
        return `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`;
    }
    else if (language === "c") {
        return `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`;
    }
    else if (language === "csharp") {
        return `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`;
    }
    else if (language === "go") {
        return `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`;
    }
    else if (language === "javascript") {
        return `console.log("Hello, World!");`;
    }
    else if (language === "rust") {
        return `fn main() {
    println!("Hello, World!");
}`;
    }
    else if (language === "bash") {
        return `#!/bin/bash

echo "Hello, World!"`;
    }
    else {
        return "Language not supported";
    }
}

exports.signUp = async (req, res) => {
    try {
        let { email, pwd, fullName } = req.body;

        let emailCon = await userModel.findOne({ email: email });
        if (emailCon) {
            return res.status(500).json({
                success: false,
                msg: "Email already exists"
            });
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPwd = await bcrypt.hash(pwd, salt);

        const user = await userModel.create({
            email,
            password: hashedPwd,
            fullName
        });

        return res.status(201).json({
            success: true,
            msg: "User created successfully",
            user
        });
    }
    catch (e) {
        res.status(500).json({
            success: false,
            msg: e.message
        })
    }
};

exports.login = async (req, res) => {
    try {
        let { email, pwd } = req.body;

        let user = await userModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "user not found"
            })
        };

        bcrypt.compare(pwd, user.password, function (error, result) {
            if (result) {

                let token = jwt.sign({ userId: user._id }, secret);

                return res.status(200).json({
                    success: true,
                    msg: "User logged in successfully",
                    token: token
                })
            }
            else {
                return res.status(401).json({
                    success: false,
                    msg: "Invalid Password"
                })
            }
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        })
    }
}

exports.createProj = async (req, res) => {
    try {
        let { name, projLanguage, token, version } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        let project = await projectModel.create({
            name: name,
            projLanguage: projLanguage,
            createdBy: user._id,
            code: getStartupCode(projLanguage),
            version: version
        });

        return res.status(200).json({
            success: true,
            msg: "Project created successfully",
            projectId: project._id
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    };
}

exports.saveProject = async (req, res) => {
    try {
        let { token, projectId, code } = req.body;

        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        const project = await projectModel.findOne({ _id: projectId, createdBy: user._id });
        if (!project) {
            return res.status(404).json({
                success: false,
                msg: "Project not found or unauthorized access"
            });
        };

        project.code = code;
        await project.save();

        return res.status(200).json({
            success: true,
            msg: "Project saved successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
};

exports.getProjects = async (req, res) => {
    try {
        let { token } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        let projects = await projectModel.find({ createdBy: user._id });
        if (!projects) {
            return res.status(404).json({
                success: false,
                msg: "Project not found or unauthorized access"
            });
        };

        return res.status(200).json({
            success: true,
            msg: "Projects retrieved successfully",
            projects: projects
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
};

exports.getProject = async (req, res) => {
    try {
        let { token, projectId } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        let project = await projectModel.findOne({ _id: projectId, createdBy: user._id });
        if (!project) {
            return res.status(404).json({
                success: false,
                msg: "Project not found or unauthorized access"
            });
        };

        return res.status(200).json({
            success: true,
            msg: "Project retrieved successfully",
            project: project
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        let { token, projectId } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        let project = await projectModel.findOneAndDelete({ _id: projectId, });

        return res.status(200).json({
            success: true,
            msg: "Project deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
}

exports.editProject = async (req, res) => {
    try {
        let { token, projectId, name } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        };

        let project = await projectModel.findOne({ _id: projectId });
        if (project) {
            project.name = name;
            await project.save();
            return res.status(200).json({
                success: true,
                msg: "Project edited successfully"
            });
        }
        else {
            return res.status(404).json({
                success: false,
                msg: "Project not found"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
}

exports.getUserInfo = async (req, res) => {
    try {
        let { token } = req.body;
        let decoded = jwt.verify(token, secret);
        let user = await userModel.findOne({ _id: decoded.userId });

        if (!user) {
            return res.status(404).json({
                success: false,
                msg: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: {
                name: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            msg: error.message
        });
    }
};
