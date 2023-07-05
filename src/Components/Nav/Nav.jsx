import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Home from "../../assets/icon-nav-home.svg";
import Tv from "../../assets/icon-nav-tv-series.svg";
import Movies from "../../assets/icon-nav-movies.svg";
import Bookmark from "../../assets/icon-nav-bookmark.svg";
import Avatar from "../../assets/image-avatar.png";

const StyledContent = styled.div`
  width: 96px;
  height: 94vh;
  background: #161d2f;
  margin: 20px 15px;
  padding: 35px 0px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;
const StyledLogo = styled.img`
  width: 32px;
  height: 25.6px;
  margin-bottom: 30px;
`;
const StyledNav = styled.img`
  width: 24px;
  cursor: pointer;
  &:hover {
    filter: invert(74%) sepia(91%) saturate(5743%) hue-rotate(333deg)
      brightness(99%) contrast(100%);
  }
`;

const StyledAvatar = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const Nav = () => {
  return (
    <StyledContent>
      <StyledDiv>
        <Link to="/">
          <StyledLogo src={Logo} alt="Logo" />
        </Link>

        <StyledDiv>
          <Link to="/">
            <StyledNav src={Home} alt="Home" />
          </Link>
          <Link to="/Movies">
            <StyledNav src={Movies} alt="Movies" />
          </Link>
          <Link to="/Tv">
            <StyledNav src={Tv} alt="Tv" />
          </Link>
          <Link to="/Bookmark">
            <StyledNav src={Bookmark} alt="Bookmark" />
          </Link>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv>
        <StyledAvatar src={Avatar} alt="Bookmark" />
      </StyledDiv>
    </StyledContent>
  );
};
