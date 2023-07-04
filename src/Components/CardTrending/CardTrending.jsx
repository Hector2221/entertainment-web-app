import { styled } from "styled-components";
import Play from "../../assets/icon-play.svg";
import { FontPlay, ImgPlay } from "../UI";

const Card = styled.div`
  position: relative;
`;
const ContPlay = styled.div`
  width: 117px;
  height: 48px;
  border-radius: 28.5px;
  background-color: rgba(255, 255, 255, 0.15);
  position: absolute;
  top: 40%;
  left: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  cursor: pointer;
  visibility: hidden;
  &:hover {
    visibility: visible;
  }
`;
const CardImg = styled.img`
  width: 470px;
  height: 230px;
  border-radius: 8px;
  position: relative;
  &:hover + ${ContPlay} {
    visibility: visible;
  }
`;

const CardBack = styled.div`
  width: 470px;
  height: 230px;
  border-radius: 8px;
  position: absolute;
  top: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
  &:hover + ${ContPlay} {
    visibility: visible;
  }
`;

// eslint-disable-next-line react/prop-types
export const CardTrending = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={item.index}>
          <CardImg src={item.thumbnail.trending.large} />
          <CardBack />
          <ContPlay>
            <ImgPlay src={Play} atl={Play} />
            <FontPlay>Play</FontPlay>
          </ContPlay>
        </Card>
      ))}
    </>
  );
};
