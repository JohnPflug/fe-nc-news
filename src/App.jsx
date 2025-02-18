import './App.css'
import { Routes, Route } from "react-router";
import Header from './Header';
import Home from './Home';
import Articles from "./Articles";
import SingleArticle from "./SingleArticle";
import Footer from './Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
