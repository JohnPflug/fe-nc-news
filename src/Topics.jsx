import { useEffect, useState } from "react";
import { getTopics } from "./api";
import Loading from "./Loading";
import { TopicsContainer } from "./BootContainers";

export default function Topics() {
    const [isLoading, setIsLoading] = useState(true);
    const [topicData, setTopicData] = useState(null);

    useEffect(() => {
        getTopics().then(response => {
            setTopicData(response.data);
            setIsLoading(false);
        })
    }, [])

    return (
        isLoading ? <Loading /> : <TopicsContainer data={topicData} />
    )
}