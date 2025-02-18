import { useState, useEffect } from "react";
import { getComments } from "./api";
import { ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import AddComment from "./AddComment";
import Loading from "./Loading";

export default function Comments({ article_id }) {
    const [commentData, setCommentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [commentPosted, setCommentPosted] = useState(false);

    useEffect(() => {
        getComments(`/articles/${article_id}/comments`)
            .then(response => {
                setCommentData(response.comments);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            })
    }, [commentPosted])


    return (
        isLoading ? <Loading /> : (
            <>
                <AddComment article_id={article_id} commentPosted={commentPosted} setCommentPosted={setCommentPosted} />
                <ListGroup className="scrollable-comments">
                    {commentData.map((comment) => (
                        <ListGroup.Item key={comment.comment_id}>
                            <div>
                                <strong>{comment.author}</strong>: {comment.body}
                                <br />
                                Created at: <b>{comment.created_at}</b>
                                <br />
                                Comment votes: <b>{comment.votes}</b>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        )
    );
}