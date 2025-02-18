import { getArticles } from "./api";
import Loading from "./Loading";
import BootContainer from "./BootContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Articles() {
    let url = "/articles"; // setting base url for API call;
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { article_id } = useParams(null);

    useEffect(() => {
        if (article_id) { //check if :article_id used in URL:
            url = "/articles/" + article_id;
        }
        getArticles(url).then(({ articles }) => {
            setArticleData(articles)
            setIsLoading(false);
        })
    }, [article_id])

    return (
        isLoading ? <Loading /> : <BootContainer data={articleData} article_id={article_id} />
    )
}