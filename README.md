# React + Vite

'grumpy19' is passed as the username state on line 6 of contexts/UserContext.jsx and is used as a React Context value. If this string is removed...

const [username, setUsername] = useState()

...or replaced with a non-existent username, the user will be able to read the articles but not vote on them. Moreover, while they will be able to read the comments on each article, they will not be able to post comments, nor delete their own.