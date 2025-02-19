import { useState } from "react";
import { postComment } from "./api";
import PostNotification from "./PostNotification";

// Hard-coding username:
const username = 'grumpy19';

export default function AddComment({ article_id, commentPosted, setCommentPosted }) {
    const [isCommenting, setIsCommenting] = useState(false);
    const [commentData, setCommentData] = useState("");
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCommentData(e.target.value);
    };

    const handleSubmit = () => {
        const comment = {
            username: username,
            body: commentData
        };
        setCommentData("");
        setIsCommenting(false);
        postComment(article_id, comment)
            .then((response) => {
                setCommentPosted(true);
                setError(null);
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div>
            <br />
            {!isCommenting ?
                <button type="button" onClick={() => setIsCommenting(true)}>Post Comment</button>
                : (
                    <>
                        <form>
                            <label>Enter your comment:
                                <br />
                                <textarea className="comment_textarea" value={commentData} onChange={handleChange} />
                            </label>
                        </form>
                        <button type="button" onClick={handleSubmit}>Confirm Post</button>
                        <button type="button" onClick={() => setIsCommenting(false)}>Cancel</button>
                    </>
                )
            }
            {commentPosted ? <PostNotification setCommentPosted={setCommentPosted} /> : null}
        </div >
    );
}
