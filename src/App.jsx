import './App.css'
import { Routes, Route } from "react-router";
import Header from './Header';
import Home from './Home';
import Articles from "./Articles";
import Footer from './Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id?" element={<Articles />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
