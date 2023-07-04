import { styled } from "styled-components";
import { Card, CardTrending } from "../../Components";

const ContHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  gap: 30px;
  margin-bottom: 80px;
`;
const ContCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 32px;
`;
const TxtHome = styled.h2`
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.5px;
`;
const ContCardTrending = styled.div`
  max-width: 1200px;
  border-radius: 8px;
  width: 100%;
  display: flex;
  column-gap: 40px;
  overflow-x: auto;
  /* Estilos del scrollbar vertical */
  ::-webkit-scrollbar {
    width: 8px; /* Ancho del scrollbar */
    background-color: #f5f5f5; /* Color del fondo del scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Color del thumb */
    border-radius: 4px; /* Radio de borde del thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Color del thumb al hacer hover */
  }
`;

// eslint-disable-next-line react/prop-types
export const Home = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const FilData = data.filter((item) => item.isTrending === false);
  // eslint-disable-next-line react/prop-types
  const Trending = data.filter((item) => item.isTrending === true);

  return (
    <ContHome>
      <TxtHome>Trending</TxtHome>
      <ContCardTrending>
        <CardTrending data={Trending} />
      </ContCardTrending>

      <TxtHome>Recommended for you</TxtHome>
      <ContCard>
        <Card data={FilData} />
      </ContCard>
    </ContHome>
  );
};
