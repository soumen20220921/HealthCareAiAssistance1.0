import './App.css';
import Home from './Home';
import Header from "./components/Header";
import Footer from './components/Footer'
import Wtwy from "./Wtwy"
import HeAssistant from "./HeAssistant"
import Services from "./Services"
import News from "./News"
import Post from "./Post";
import Getstarted from "./getStarted";
import DataSet from "./DataSet";
import OnlineDoctor from "./OnlineDoctor";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wtwy" element={<Wtwy />} />
          <Route path="/heassistant" element={<HeAssistant />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/post" element={<Post />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/dataset" element={<DataSet />} />
          <Route path="/onlinedoctor" element={<OnlineDoctor />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
