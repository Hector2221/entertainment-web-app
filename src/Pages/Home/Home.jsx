import { styled } from "styled-components";
import { Card } from "../../Components";

const ContHome = styled.div`
  display: flex;
  flex-direction: column;
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

// eslint-disable-next-line react/prop-types
export const Home = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const FilData = data.filter((item) => item.isTrending === false);

  return (
    <ContHome>
      <TxtHome>Trending</TxtHome>
      <TxtHome>Recommended for you</TxtHome>
      <ContCard>
        <Card data={FilData} />
      </ContCard>
    </ContHome>
  );
};
