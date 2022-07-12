import styled from 'styled-components/macro'
import Container from '../../../components/Container';
import Flex from '../../../components/Flex';
import FloatModel from '../../../components/FloatModel';

const SectionWrapper = styled.div`
  padding-top: 120px;
  background: url('/images/about/home.png'), linear-gradient(180deg, #E1FBD7 0%, #62D5E6 0.01%, #E1FCD3 0.02%, #6ADAEA 100%);
  backdrop-filter: blur(4px);
  background-size: auto 90%, auto;
  background-repeat: no-repeat;
  background-position: bottom right;
`

const StyledContainer = styled.div`
  height: 100%;
`

const PtoEarn = styled.div`
  position: absolute;
`

const Heading = styled.h2`
  font-family: BadaBoom;
  font-size: 96px;
  font-weight: 400;
  line-height: 102px;
  color: #FFF;
  margin: 0;
`

const Title = styled.div`
  margin-top: 120px;
  margin-bottom: 12px;
`

const Text = styled.span`
  font-family: Alata, sans-serif;
  font-size: 32px;
  line-height: 42px;
  color: #FFF;
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
  height: 890px;
`


const IntroSection = () => {
  return (
    <SectionWrapper>
      <Container fullVertical>
        <InnerWrapp>
          <PtoEarn>
            <Title>
              <Heading>PLAY TO EARN</Heading>
            </Title>
            <Flex column>
              <Text>Grab chillis and earn</Text>
              <Text>as you play!</Text>
            </Flex>
            <Platform>
              <Flex gap='18px'>
                <Item bgurl='/images/platform/google.svg'></Item>
                <Item bgurl='/images/platform/apple.svg'></Item>
                <Item bgurl='/images/platform/pc.svg'></Item>
              </Flex>
            </Platform>
          </PtoEarn>
          <FloatModel width="54px" height='166px' imgurl='/images/about/chilli.png' top='55%' left='60%' />
          <FloatModel width="387px" height='282px' imgurl='/images/about/man.png' top='50%' left='90%' />
        </InnerWrapp>
      </Container>
    </SectionWrapper>
  )
}


export default IntroSection;