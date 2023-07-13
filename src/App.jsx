import { Nav } from "./Components";
import { GlobalStyled } from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookmarked, Home, Movies, Page404 } from "./Pages";

import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TvSeries } from "./Pages/TvSeries/TvSeries";

const Container = styled.div`
  display: flex;
  max-width: 1380px;
`;

function App() {
  const [data, setData] = useState([]);
  const [Marked, setMarked] = useState([]);

  //Register Bookmarked
  const handleRegister = (value) => {
    // Verificar si el elemento ya existe en el arreglo
    if (Marked.includes(value)) {
      // El elemento ya existe, no se agrega nuevamente
      return;
    }
    // Agregar el elemento al arreglo
    setMarked([...Marked, value]);
  };

  //Api
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
    <Container>
      <Router>
        <Nav />
        <GlobalStyled />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} register={handleRegister} />}
          />
          <Route
            path="/Movies"
            element={<Movies data={data} register={handleRegister} />}
          />
          <Route
            path="/Tv"
            element={<TvSeries data={data} register={handleRegister} />}
          />
          <Route
            path="/Bookmark"
            element={<Bookmarked data={Marked} register={handleRegister} />}
          />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
