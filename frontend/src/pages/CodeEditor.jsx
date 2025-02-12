import './CodeEditor.css';
import JavaEditor from "../components/JavaEditor.jsx";
import RotateScreenPrompt from "../components/RotateScreenPrompt.jsx";

const CodeEditor = () => {
    return (
        <>
            <RotateScreenPrompt />
            <JavaEditor />
        </>
    );
};

export default CodeEditor;