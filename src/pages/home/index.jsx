import styled from 'styled-components/macro';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import { Environment, OrbitControls } from "@react-three/drei";
import Container from '../../components/Container';
import FireFlies from '../../components/FireFlies';
import PageMenuGroup from '../../components/PageMenuGroup';
import Scene from "./Scene"
import './style.css';

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
    font-size: 18px;
    font-family: GilroyMedium;
  }

  @media (min-width: 768px) {
    transform: translate(35px, -50%);
    span {
      font-size: 24px;
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

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


const HomePage = () => {
  return (
    <Wrapper>
      <StyledContainer fullVertical>
        <Scene />
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <Intro>
            <span>A metaverse with 24+</span>
            <span>different play to earn games</span>
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