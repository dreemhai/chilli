import styled from 'styled-components/macro';
import gsap from 'gsap';
import IntroSection from "./intro";
import VideoSection from './video';
import GamesSection from './games';
import RoadMap from './roadmap';

import Container from '../../components/Container';
import { useRef } from 'react';
import { useEffect } from 'react';

const PageWrapper = styled.div`
`


const AboutPage = () => {
  return (
      <PageWrapper>
        <IntroSection />
        <VideoSection />
        {/* <BetStuff>
          <img src="/images/about/deco.png" />
        </BetStuff> */}
        <GamesSection />
        {/* <RoadMap /> */}
      </PageWrapper>
  )
}

export default AboutPage;