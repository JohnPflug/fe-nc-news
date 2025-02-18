import { getSingleArticle } from "./api";
import Loading from "./Loading";
import { SingleArticleContainer } from "./BootContainers";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function SingleArticle() {
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams(null);

    useEffect(() => {
        getSingleArticle(`/articles/${article_id}`)
            .then(({ articles }) => {
                setArticleData(articles)
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })

    }, [])

    return (
        isLoading ? <Loading /> : <SingleArticleContainer data={articleData} article_id={article_id} />
    )
}