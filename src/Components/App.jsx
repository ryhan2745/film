import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import HomePages from "./Pages/HomePages";
import NotFound from "./Pages/NotFound";
import Header from "./Elements/Header";
import MovieCard from "./Modules/MovieCard";
import Footer from "./Elements/Footer";
import Movies from "./Pages/Movies";
import Favourits from "./Pages/Favourits";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/home" element={<HomePages />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/favourits" element={<Favourits />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/movies/:key" element={<MovieCard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
