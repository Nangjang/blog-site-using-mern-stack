import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
    return (
        <>
            {/* Page heading */}
            <h1>Articles</h1>

            {/* Render the ArticlesList component and pass articles as a prop */}
            <ArticlesList articles={articles} />
        </>
    );
};

export default ArticlesListPage;