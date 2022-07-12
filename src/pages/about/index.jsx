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

const BranchWrapper = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`

const Branch = styled.div`
  width: 100%;
  position: absolute;
  transform: translate(0, -42%);
  img {
    width: 100%;
    height: auto;
  }
`

const SpiderWrapper = styled.div`
  position: absolute;
  transform: translate(50px, 0);
`

const BetStuff = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    position: absolute;
    z-index: 2;
    transform: translate(0, -50%);
  }
`

const StyledSpider = styled.div`
  position: absolute;
  width: 80px;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`

const Spider = () => {
  const el = useRef();
  const tl = gsap.timeline({repeat: -1});
  
  useEffect(() => {
    tl.to(el.current, {
      y: '100px',
      duration: 1
    })
    .to(el.current, {
      y: '-=30px',
      duration: 0.5
    })
    .to(el.current, {
      y: '+=60px',
      duration: 1.2
    })
    .to(el.current, {
      y: '0px',
      duration: 5
    })
  }, [])


  return (
    <SpiderWrapper>
      <StyledSpider ref={el}>
        <img src='/images/about/spider.svg' />
      </StyledSpider>
    </SpiderWrapper>
  )
}


const AboutPage = () => {
  return (
      <PageWrapper>
        <IntroSection />
        {/* <BranchWrapper>
          <Branch>
            <img src='/images/about/branch.png' />
          </Branch>
          <Spider />
        </BranchWrapper> */}
        <VideoSection />
        {/* <BetStuff>
          <img src="/images/about/deco.png" />
        </BetStuff> */}
        {/* <GamesSection />
        <RoadMap /> */}
      </PageWrapper>
  )
}

export default AboutPage;