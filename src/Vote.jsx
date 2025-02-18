import { useState, useEffect } from "react";
import { patchVotes } from "./api";

export default function Vote({ article_id, votes, setError }) {
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        setLikesCount(votes);
    }, []);

    const handleUpVote = () => {
        setLikesCount((currentLikesCount) => currentLikesCount + 1);
        patchVotes({ article_id, countChange: 1 })
            .catch((error) => {
                setLikesCount((currentLikesCount) => currentLikesCount - 1);
                setError("Your upVote was not successful. Please try again!");
            });
    };

    const handleDownVote = () => {
        setLikesCount((currentLikesCount) => currentLikesCount - 1);
        patchVotes({ article_id, countChange: -1 })
            .catch((error) => {
                setLikesCount((currentLikesCount) => currentLikesCount + 1);
                setError("Your downVote was not successful. Please try again!");
            });
    }

    return (
        <div>
            <button className="upVote_button" onClick={handleUpVote}>upVote</button>
            <button className="downVote_button" onClick={handleDownVote}>downVote</button>
            <p>{likesCount}</p>
        </div>
    );
};