import { styled } from "styled-components";
import { Card } from "../../Components";

const ConstMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  gap: 30px;
  margin-bottom: 80px;
`;

const ContCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 32px;
`;

// eslint-disable-next-line react/prop-types
export const TvSeries = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const FilData = data.filter((item) => item.category === "TV Series");
  return (
    <ConstMovie>
      <ContCard>
        <Card data={FilData} />
      </ContCard>
    </ConstMovie>
  );
};
