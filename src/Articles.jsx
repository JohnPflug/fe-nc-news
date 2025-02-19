import { getArticles } from "./api";
import Loading from "./Loading";
import { ArticlesContainer } from "./BootContainers";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Articles() {
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const sortByTopic = searchParams.get("topic");

    useEffect(() => {
        getArticles(sortByTopic)
            .then(({ articles }) => {
                setArticleData(articles)
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })

    }, [])

    return (
        isLoading ? <Loading /> : <ArticlesContainer data={articleData} />
    )
}