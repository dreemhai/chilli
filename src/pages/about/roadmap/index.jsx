import Tokenomics from "./tokenomics";
import Partners from "./partners";
import MapCarousel from './mapcarousel';
import styled from "styled-components/macro";
import Footer from "../../footer"

const SectionWrapper = styled.div`
  background: linear-gradient(180deg, #62D5E6 0%, #DBFBD5 100%);
  margin-top: -276px;
`;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const RoadMap = () => {
  return (
    <SectionWrapper>
      <MapCarousel />
      <Tokenomics />
      <Partners />
      <Footer />
    </SectionWrapper>
  )
};

export default RoadMap;