import './ArticleCard.css';
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({id,title,summary,content,author}) =>{
    const navigate = useNavigate();
    const openArticle = () =>{
        const to = `/articles/${id}`
        navigate(to);
    }
    return (
        <div className="card" onClick={openArticle}>
            {/*<div className="title">{title}</div>*/}
            <div className="content" >
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
                {/*<ReactMarkdown>{content}</ReactMarkdown> /!* Renders Markdown as HTML *!/*/}
            </div>
            <div className="card-footer">{author}</div>
        </div>
    );
};

export default ArticleCard;