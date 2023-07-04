import { styled } from "styled-components";
import ErrorPague from "../../assets/ErrorPague404.svg";
const ErPague = styled.img``;

export const Page404 = () => {
  return <ErPague src={ErrorPague} alt={ErrorPague} />;
};
