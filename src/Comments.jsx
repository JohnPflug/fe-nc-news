import { useState, useEffect } from "react";
import { getComments } from "./api";
import { ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import AddComment from "./AddComment";
import Loading from "./Loading";
import RemoveComment from "./RemoveComment";
import DeletedCommentNotification from "./DeletedCommentNotification";

// Hard-coding username:
// const username = 'grumpy19';
let username;

export default function Comments({ article_id }) {
    const [commentData, setCommentData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [commentPosted, setCommentPosted] = useState(false);
    const [commentDeleted, setCommentDeleted] = useState(false);

    useEffect(() => {
        getComments(`/articles/${article_id}/comments`)
            .then(response => {
                setCommentData(response.comments);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [commentPosted, commentDeleted]);

    return (
        isLoading ? <Loading /> : (
            <>
                {username ? <AddComment article_id={article_id} commentPosted={commentPosted} setCommentPosted={setCommentPosted} /> : null}

                {commentDeleted ? <DeletedCommentNotification setCommentDeleted={setCommentDeleted} /> : null}

                <ListGroup className="scrollable-comments">
                    {commentData.map((comment) => (
                        <ListGroup.Item key={comment.comment_id}>
                            <div>
                                <strong>{comment.author}</strong>: {comment.body}
                                <br />
                                Created at: <b>{comment.created_at}</b>
                                <br />
                                Comment votes: <b>{comment.votes}</b>
                                <br />

                                {username && comment.author === username ? <RemoveComment comment_id={comment.comment_id} setCommentDeleted={setCommentDeleted} /> : null}

                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </>
        )
    );
}
