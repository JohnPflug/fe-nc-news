import { useState, useEffect } from 'react';

export default function DeletedCommentNotification({ setCommentDeleted }) {
    const [message, setMessage] = useState('Message Deleted!');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMessage('');
            setCommentDeleted(false)
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return <p>{message}</p>;
};
