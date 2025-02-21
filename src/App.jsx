import './App.css'
import { Routes, Route } from "react-router";

//Component imports:
import Header from './Header';
import Home from './Home';
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import Footer from './Footer';
import Topics from './Topics';
import InvalidPath from './InvalidPath';

//Context provider:
import UserContextProvider from "../contexts/UserContext";

function App() {

  return (
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/*" element={< InvalidPath />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  )
}

export default App
