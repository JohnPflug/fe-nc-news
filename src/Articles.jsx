import Loading from "./Loading";
import { getArticles } from "./api";
import { ArticlesContainer } from "./BootContainers";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Articles() {
    const [isLoading, setIsLoading] = useState(true);
    const [articleData, setArticleData] = useState(null);
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");
    const [error, setError] = useState(null)

    const [searchParams, setSearchParams] = useSearchParams();

    const topic = searchParams.get("topic");
    const sort_by = searchParams.get("sort_by");
    const orderSet = searchParams.get("order");

    useEffect(() => {
        getArticles(topic, sort_by, orderSet)
            .then(({ articles }) => {
                setArticleData(articles)
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.response.data.msg);
            })
    }, [sortBy, order])

    const handleSortChange = (e) => {
        const newSortBy = e.target.value;
        setSortBy(newSortBy);
        setSearchParams((prev) => {
            prev.set("sort_by", newSortBy);
            return prev;
        });
    };

    const handleOrderChange = (e) => {
        const newOrder = e.target.value;
        setOrder(newOrder);
        setSearchParams((prev) => {
            prev.set("order", newOrder);
            return prev;
        });
    }

    return (
        <>
            <form>
                <label> Sort by:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="created_at">Date</option>
                        <option value="comment_count">Comment Count</option>
                        <option value="votes">Votes</option>
                    </select>
                </label>
                <label> Order:
                    <select value={order} onChange={handleOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </form>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <p className="error_message">{error}</p>
            ) : <ArticlesContainer data={articleData} />}
        </>

    )
}