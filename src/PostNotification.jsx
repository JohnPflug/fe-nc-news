import { useState, useEffect } from 'react';

export default function PostNotification() {
    const [message, setMessage] = useState('Comment posted!');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setMessage('');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);

    return <p>{message}</p>;
};
