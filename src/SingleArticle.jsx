import Loading from "./Loading";
import { getSingleArticle } from "./api";
import { SingleArticleContainer } from "./BootContainers";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleArticle() {
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    const { article_id } = useParams(null);

    useEffect(() => {
        getSingleArticle(`/articles/${article_id}`)
            .then(({ articles }) => {
                setArticleData(articles)
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.response.data.msg);
            })

    }, [])

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <p className="error_message">{error}</p>
            ) : (
                <SingleArticleContainer data={articleData} article_id={article_id} />
            )}
        </>
    );
}