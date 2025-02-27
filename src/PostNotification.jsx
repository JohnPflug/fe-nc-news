import { useState, useEffect } from 'react';

export default function PostNotification({ setCommentPosted }) {
    const [message, setMessage] = useState('Comment posted!');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMessage('');
            setCommentPosted(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [setCommentPosted]);

    return <p>{message}</p>;
}
