import { getArticles } from "./api";
import Loading from "./Loading";
import { ArticlesContainer } from "./BootContainers";
import { useEffect, useState } from "react";

export default function Articles() {
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles("/articles/")
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