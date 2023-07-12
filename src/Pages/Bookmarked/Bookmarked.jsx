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

export const Bookmarked = ({ data, register }) => {
  return (
    <ConstMovie>
      <ContCard>
        <Card data={data} register={register} />
      </ContCard>
    </ConstMovie>
  );
};
