import styled from 'styled-components/macro'
import Container from '../../../components/Container';
import Flex from '../../../components/Flex';
import FloatModel from '../../../components/FloatModel';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SectionWrapper = styled.div`
  padding-top: 120px;
  background: url('/images/about/home.png'), linear-gradient(180deg, #E1FBD7 0%, #62D5E6 0.01%, #E1FCD3 0.02%, #6ADAEA 100%);
  backdrop-filter: blur(4px);
  background-size: auto 90%, auto;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  overflow: hidden;
`

const StyledContainer = styled(Container)`
  overflow: hidden;
`

const PtoEarn = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 120px;
  padding-bottom: 350px;
`

const Heading = styled.h2`
  font-family: BadaBoom;
  font-weight: 400;
  font-size: 52px;
  line-height: 65px;
  color: #FFF;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 96px;
    line-height: 102px;
  }
`

const Title = styled.div`
  margin-bottom: 12px;
`

const Text = styled.span`
  padding: 0;
  margin: 0;
  font-family: GilroyLight;
  font-size: 22px;
  line-height: 29px;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;    
  } 
`

const Item = styled.div`
  width: 119px;
  height: 46px;
  background-image: url('${props => props.bgurl ? props.bgurl : ''}');
  background-size: contain;
  background-repeat: no-repeat;
`

const Platform = styled.div`
  margin-top: 36px;
`

const InnerWrapp = styled.div`
  position: relative;
`



const BranchWrapper = styled.div`
  position: absolute;
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

const IntroSection = () => {
  const container = useRef();
  const titleEl = useRef();
  const contentEl = useRef();
  let q = gsap.utils.selector(container); 
 
  useEffect(() => {
    gsap.timeline()
    .fromTo(titleEl.current, {
      opacity: 0,
      y: "+5px",
      scale: 0.8
    }, {
      opacity: 1,
      y: '0px',
      scale: 1,
      duration: 1
    }, 1)
    .fromTo(contentEl.current, {
      opacity: 0,
      y: "+5px",
      scale: 0.8
    }, {
      opacity: 1,
      y: '0px',
      scale: 1,
      duration: 1
    }, 1.5)
    .fromTo(q(".platform--item"), {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.5
    }, 1.5)
  }, [])

  return (
    <SectionWrapper>
      <StyledContainer fullVertical>
        <InnerWrapp ref={container}>
          <PtoEarn>
            <Title ref={titleEl}>
              <Heading>PLAY TO EARN</Heading>
            </Title>
            <Flex column ref={contentEl}>
              <Text>Grab chillis and earn</Text>
              <Text>as you play!</Text>
            </Flex>
            <Platform>
              <Flex gap='18px'>
                <Item bgurl='/images/platform/google.svg' className='platform--item'></Item>
                <Item bgurl='/images/platform/apple.svg' className='platform--item'></Item>
                <Item bgurl='/images/platform/pc.svg' className='platform--item'></Item>
              </Flex>
            </Platform>
          </PtoEarn>
          {/* <FloatModel width="54px" height='166px' imgurl='/images/about/chilli.png' top='55%' left='60%' />
          <FloatModel width="387px" height='282px' imgurl='/images/about/man.png' top='50%' left='90%' /> */}
          <FloatModel mposition={{
              width: '28px',
              height: '104px',
              top: '74%',
              left: '18%'
          }} 
          position={{
            width: '42px',
            height: '154px',
            top: '55%',
            left: '60%'
           }} 
          imgurl='/images/about/chilli.png' />
          <FloatModel mposition={{
              width: '270px',
              height: '208px',
              top: '74%',
              left: '77%'
          }} 
          position={{
            width: '340px',
            height: '262px',
            top: '50%',
            left: '90%'
           }} 
          imgurl='/images/about/man.png' />
        </InnerWrapp>
      </StyledContainer>
      {/* <BranchWrapper>
        <Branch>
          <img src='/images/about/branch.png' />
        </Branch>
        <Spider />
      </BranchWrapper> */}
    </SectionWrapper>
  )
}


export default IntroSection;