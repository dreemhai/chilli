import HorizonGallery from "../../../components/HorizonGallery";
import styled from "styled-components/macro";

const SectionWrapper = styled.div`
  position: relative;
  /* height: 1900px; */
  /* background-image: url('/images/about/games-bg.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const Games = () => {
  return (
    <SectionWrapper>
      <HorizonGallery />
      <Background>
        <img src='/images/about/games-bg.png' style={{width: '100%', height: '100%'}} />
      </Background>
    </SectionWrapper>
  );
};

export default Games;