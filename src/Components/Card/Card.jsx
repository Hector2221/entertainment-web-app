import { styled } from "styled-components";
import Bookmark from "../../assets/icon-bookmark-empty.svg";
import Play from "../../assets/icon-play.svg";
import { useState } from "react";
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #fff;
`;
const Details = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: #fff;
`;

const DivDetails = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0px;
`;

const ContentMark = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 80%;
  left: 235px;
  margin-top: 10px;
  cursor: pointer;
`;

const Mark = styled.img``;

const ContPlay = styled.div`
  width: 117px;
  height: 48px;
  border-radius: 28.5px;
  background-color: rgba(255, 255, 255, 0.15);
  position: absolute;
  top: 25%;
  left: 70px;
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
  width: 280px;
  height: 174px;
  border-radius: 8px;
  position: relative;
  &:hover {
    filter: brightness(50%);
  }
  &:hover + ${ContPlay} {
    visibility: visible;
  }
`;

const FontPlay = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  opacity: 1;
`;

const ImgPlay = styled.img`
  width: 30px;
  height: 30px;
`;

export const Card = ({ data }) => {
  const [Marked, setMarked] = useState([]);
  const handleBookmarkClick = (item) => {
    setMarked((prevMarked) => [...prevMarked, item]);
    console.log(Marked);
  };

  return data.map((item, index) => (
    <StyledCard key={index}>
      <CardImg src={item.thumbnail.regular.medium} />
      <ContPlay>
        <ImgPlay src={Play} />
        <FontPlay>Play</FontPlay>
      </ContPlay>
      <ContentMark onClick={() => handleBookmarkClick(item)}>
        <Mark src={Bookmark} />
      </ContentMark>
      <DivDetails>
        <Details>{item.year}</Details>
        <Details>{item.category}</Details>
        <Details>{item.rating}</Details>
      </DivDetails>
      <Title>{item.title}</Title>
    </StyledCard>
  ));
};
