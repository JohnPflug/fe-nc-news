# React + Vite

A username variable is hardcoded as 'grumpy19' on line 11 of Comments.jsx. A user muste be signed in to post comments and to delete their own comments. To see what would happen if the user was not signed in, comment out line 11 and uncomment line 12:

let username;

username needs to exist but can be undefined in order to simply read comments.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
