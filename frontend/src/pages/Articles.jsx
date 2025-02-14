import {useEffect,useState} from "react";
import ArticleCard from "../components/ArticleCard.jsx";
import "./Articles.css";
import {Link} from "react-router-dom";


const Articles = ()=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = " http://192.168.31.45:5000/articles";

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(url);
                const response = await fetch(url);
                if (!response.ok) throw new Error("Failed to fetch data");

                const data = await response.json();
                setArticles(data);
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
        <div className="articles-container">
            <div className="title-and-link">
                <h1>Articles</h1>
                <Link to="/article-editor" className="create-article-link">Create Article</Link>
            </div>
            <div className="article-cards">
                {articles.map((article) => (
                    <div className="article-card" key={article.id}>
                        <ArticleCard {...article}  />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;

