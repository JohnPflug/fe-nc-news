import './App.css'
import { Routes, Route } from "react-router";
import Header from './Header';
import Home from './Home';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
