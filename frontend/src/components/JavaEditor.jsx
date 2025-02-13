import {useState} from "react";
import Editor from "@monaco-editor/react";
import {RiResetLeftLine} from "react-icons/ri";
const JavaEditor = () => {
    const initialCode = `// Do not rename the class name
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`;
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("Waiting for output...");
    const [loading, setLoading] = useState(false);
    const handleReset = async () => {
        setCode(initialCode);
        setOutput("Waiting for output...");

    };
    const handleRunCode = async () => {
        setLoading(true);
        setOutput("Running...");

        try {
            const url = " http://localhost:8080/api/execution/execute";
            console.log(url);
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: code
            });

            const result = await response.json();
            if( result.output !== "" ) {
                setOutput(result.output || "No output returned");
            }else{
                setOutput(result.error || "No output returned");
            }

        } catch (error) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="editor-container">
                <div className="code-editor">
                    <p className="title">Java code editor</p>
                    <div className="editor">
                        <Editor
                            height="100%"
                            width="100%"
                            defaultLanguage="java"
                            value={code}
                            theme="vs-light"
                            options={{
                                fontSize: 16, // Set font size dynamically
                            }}
                            onChange={(value) => setCode(value)}
                        />
                        <div className="editor-buttons">
                            <RiResetLeftLine onClick={handleReset} className="reset-button" />
                            <button className="run-button" onClick={handleRunCode} disabled={loading}>
                                {loading ? "Running..." : "Run Code"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="output">
                    <p>Output</p>
                    <pre className="output-text">
                        {output}
                    </pre>
                </div>
            </div>
        </>
    );
}

export default JavaEditor;