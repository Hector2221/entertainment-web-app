import { Card, Nav } from "./Components";
import { GlobalStyled } from "./GlobalStyled";
import axios from "axios";
import { useEffect, useState } from "react";
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
      <Card data={data} />
      <GlobalStyled />

      <Nav />
    </>
  );
}

export default App;
