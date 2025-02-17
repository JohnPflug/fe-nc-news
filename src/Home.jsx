import api from "./api";
import Loading from "./Loading";
import BootContainer from "./BootContainer";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
    const [articleData, setArticleData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api('/articles').then(({ articles }) => {
            setArticleData(articles)
            setIsLoading(false);
        })
    }, [])

    return (
        isLoading ? <Loading /> : <BootContainer data={articleData} />
    )
}