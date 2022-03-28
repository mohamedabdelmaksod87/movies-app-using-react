import Logo1 from "../../images/react-movie-logo.svg";
import Logo2 from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg1, LogoImg2 } from "./header.style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg1 src={Logo1} alt="logo1" />
        </Link>
        <LogoImg2 src={Logo2} alt="logo2" />
      </Content>
    </Wrapper>
  );
}
