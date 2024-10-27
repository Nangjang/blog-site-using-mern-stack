import { useParams } from 'react-router-dom';

import articles from './article-content';

const ArticlePage = () => {
    // Extract the articleId parameter from the URL
    const { articleId } = useParams();

    // Find the article that matches the articleId
    const article = articles.find(article => article.name === articleId);

    return (
        <>
            {/* Display the article title */}
            <h1>{article.title}</h1>
            
            {/* Map through the article's content and display each paragraph */}
            {article.content.map(paragraph => (
                <p>{paragraph}</p> // Render each paragraph
            ))}
        </>
    );
}

export default ArticlePage;