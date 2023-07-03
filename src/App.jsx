import { Nav } from "./Components";
import { GlobalStyled } from "./GlobalStyled";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios("https://apimocha.com/movie-hector/post");
        const response = await res.data;
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          {/* <Route path="/sobre" element={<Sobre />} />
        <Route path="/*" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
