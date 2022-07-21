import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components/macro';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { Environment, OrbitControls } from "@react-three/drei";
import Container from '../../components/Container';
import FireFlies from '../../components/FireFlies';
import PageMenuGroup from '../../components/PageMenuGroup';
// import Scene from "./Scene"
import bgVideo from "../../video/home.mp4";
import './style.css';

const Scene = React.lazy(() => import("./Scene"));

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Intro = styled.div`
  position: absolute;
  top: 60%;
  transform: translate(10px, -50%);
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: #FFF;
    font-size: 24px;
    font-family: GilroyMedium;
  }

  @media (min-width: 768px) {
    transform: translate(35px, -50%);
    span {
      font-size: 32px;
      line-height: 38px;
    }
  }
`

const Coin = styled.div`
  position: absolute;
  padding: inherit;
  top: 45%;
  transform: translate(0, -50%);
  right: 5px;
  width: 89px;
  height: 90px;
  background-image: url('/images/coin.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 107px;
    height: 109px;
  }
`


const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

const LoadScreen = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #FFF;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const HomePage = () => {
  const [isMobile, setMobile] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setMobile(true);
      videoRef.current.play();
    }
  }, []);

  return (
    <Wrapper>
      <StyledContainer fullVertical>
      {/* <PreLoader /> */}
      {isMobile ? 
        <video ref={videoRef} muted loop playsInline={true} id="video" controls={false}>
        <source src={bgVideo} type="video/mp4" />
      </video> :
      <Scene />
    }
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Intro>
              <span>An interconnected world of unique game</span>
              <span>experiences involving customized avatars usable in</span>
              <span>25+ games in a single Play-to-Earn Ecosystem</span>
            </Intro>
            <Coin />
            <PageMenuGroup />
          </div>

          {/* <SceneWrapper>
            <Canvas drp={[1, 2]} camera={{ position: [25, 5, 15], fov: 20 }}>
              <Environment preset="dawn" />
              <ambientLight intensity={0.5} />
              <Suspense fallback={<Loader />}>
                <Scene scale={100} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </SceneWrapper> */}

          <FireFlies count={10} />
      </StyledContainer>
    </Wrapper>
  )
}

export default HomePage;