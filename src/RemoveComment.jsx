import { deleteComment } from "./api";

export default function RemoveComment({ comment_id, setCommentDeleted }) {

    const handleClick = () => {
        deleteComment(comment_id)
            .then((response) => {
                setCommentDeleted(true);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <button type="button" onClick={handleClick}>Delete Comment</button>
    );
}
