import { styled } from "styled-components";
import ErrorPague from "../../assets/ErrorPague404.svg";

const ContErr = styled.div`
  display: flex;
  height: 100vh;
  width: 250vh;
  justify-content: center;
  align-items: center;
`;

const ErPague = styled.img`
  width: 400px;
`;

export const Page404 = () => {
  return (
    <ContErr>
      <ErPague src={ErrorPague} />
    </ContErr>
  );
};
