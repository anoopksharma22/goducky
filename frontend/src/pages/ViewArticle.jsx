import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "./ViewArticle.css";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism/index.js";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";

const ViewArticle = ()=>{
    const { id } = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = `http://192.168.31.45:5000/articles/parsed/${id}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.text();
                const sanitizedHTML = DOMPurify.sanitize(data);
                setArticle(sanitizedHTML);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="view-article">
            {/*<div className="view-article-title">{article.title}</div>*/}
            <div className="view-article-content" >
                {/*<ReactMarkdown*/}
                {/*    remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}*/}
                {/*    components={{*/}
                {/*        code({  inline, children, ...props }) {*/}
                {/*            return !inline ? (*/}
                {/*                <SyntaxHighlighter style={atomDark} language="java" PreTag="div" {...props}>*/}
                {/*                    {String(children).replace(/\n$/, "")}*/}
                {/*                </SyntaxHighlighter>*/}
                {/*            ) : (*/}
                {/*                <code {...props} style={{ background: "#eee", padding: "2px 4px", borderRadius: "4px" }}>*/}
                {/*                    {children}*/}
                {/*                </code>*/}
                {/*            );*/}
                {/*        },*/}
                {/*    }}*/}
                {/*>*/}
                <div dangerouslySetInnerHTML={{ __html: article }} />
                {/*</ReactMarkdown>*/}
                {/*<ReactMarkdown>{content}</ReactMarkdown> /!* Renders Markdown as HTML *!/*/}
            </div>
            <div className="view-article-card-footer">{article.author}</div>
        </div>
    );
};

export default ViewArticle;