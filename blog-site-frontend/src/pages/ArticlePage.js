import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    // Extract the articleId parameter from the URL
    const { articleId } = useParams();

    // Find the article that matches the articleId
    const article = articles.find(article => article.name === articleId);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;

            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, []);

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
            {/* Display the article title */}
            <h1>{article.title}</h1>
            <p>The article has {articleInfo.upvotes} upvote(s).</p>
            {/* Map through the article's content and display each paragraph */}
            {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p> // Render each paragraph
            ))}
        </>
    );
}

export default ArticlePage;