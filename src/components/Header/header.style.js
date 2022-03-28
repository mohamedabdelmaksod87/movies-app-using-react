import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg1 = styled.img`
  width: 200px;
  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const LogoImg2 = styled.img`
  width: 150px;
  @media (max-width: 767px) {
    width: 100px;
  }
`;
