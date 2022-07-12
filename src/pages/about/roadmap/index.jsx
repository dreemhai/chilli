import Tokenomics from "./tokenomics";
import Partners from "./partners";

import styled from "styled-components/macro";
import MultiCarousel from "../../../components/MultiCarousel";

const SectionWrapper = styled.div`
  background: linear-gradient(180deg, #62D5E6 0%, #DBFBD5 100%);
  height: 100vh;
`;

const RoadMap = () => {
  return (
    <SectionWrapper>
      <MultiCarousel interval={1000} />
      {/* <Tokenomics />
      <Partners /> */}
    </SectionWrapper>
  )
};

export default RoadMap;