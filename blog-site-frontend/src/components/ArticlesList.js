import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
    return (
        <>
            {/* Map over the articles array to create a link for each article */}
            {articles.map((article) => (
                <Link
                    key={article.name} // Unique key for each article link
                    className="article-list-item" // Class for styling each link item
                    to={`/articles/${article.name}`} // Link route to each article's page
                >
                    {/* Display article title */}
                    <h3>{article.title}</h3>

                    {/* Display article preview (first 150 characters of the content) */}
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    );
}

export default ArticlesList;