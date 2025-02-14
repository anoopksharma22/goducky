// import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigate } from "react-router-dom";
import "./ArticlesEditor.css";

const ArticlesEditor = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState(`# <Replace this with TITLE>\n\nEdit your Markdown file here...`);
    const saveMd = async () => {
        const url = " http://localhost:5000/articles";
        console.log(url);
        console.log(content);
        const body = {
            "content": content
        }
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
        if (response.ok) {
            navigate("/articles"); // Redirect to the articles page
        } else {
            console.error("Failed to save article");
        }

    };
    return (
        <div className="article-editor-container">
            <h2 className="article-editor-title">Markdown Editor with Preview</h2>
            <button className="save-md-button" onClick={saveMd}>Save</button>
            <div className="article-editor-preview-container" >
                {/* Left: Markdown Editor */}
                <div className="article-editor">
                    <Editor
                        height="90vh"
                        defaultLanguage="markdown"
                        value={content}
                        onChange={(value) => setContent(value)}
                        options={{
                            wordWrap: "on",
                            minimap: { enabled: false },
                            fontSize: 14,
                        }}
                    />
                </div>

                {/* Right: Markdown Preview */}
                <div className="article-preview-container">
                    <div className="article-preview">
                        <ReactMarkdown
                            components={{
                                code({  inline, children, ...props }) {
                                    return !inline ? (
                                        <SyntaxHighlighter style={atomDark} language="java" PreTag="div" {...props}>
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code {...props} style={{ background: "#eee", padding: "2px 4px", borderRadius: "4px" }}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlesEditor;