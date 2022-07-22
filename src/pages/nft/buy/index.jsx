import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Flex from '../../../components/Flex';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import styled from 'styled-components/macro';
import './style.css';

const SectionWrapper = styled.div``
const InnerWrapper = styled.div`
  padding-bottom: 60px;
`

const PanelInner = styled(Flex)`
  background-image: url(${props => props.bgurl ? props.bgurl : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
`

const Text = styled.p`
  padding: 0 20px;
  margin: 0;
  font-family: GilroyLight;
  font-size: 15px;
  line-height: 22px;
  color: #aaa;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px; 

  @media (min-width: 768px) {
    width: 40%;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 35px; 
  }
`

const CharacterWrapper = styled.div`
  width: 80%;
  max-width: 650px;

  img {
    width: 100%;
  }
`

const TextWrapper = styled.div`
  margin-bottom: 15px;
`

const BuyBtn = styled(Button)`
  @media (min-width: 768px) {
    padding: 8px 55px;
  }
`

const BasicTab = () => (
  <Tabs>
    <TabList>
      <Tab>POWER UPS</Tab>
      <Tab>GADGETS</Tab>
      <Tab>HEROES</Tab>
      <Tab>ASSETS</Tab>
    </TabList>

    <TabPanel>
      <PanelInner justifyCenter alignCenter>
      </PanelInner>     
    </TabPanel>
    <TabPanel>
      <PanelInner bgurl='/images/nft/buy/bg.png'>
        <CharacterWrapper>
          <img src='/images/nft/buy/character.png' />
        </CharacterWrapper>
      </PanelInner>     
    </TabPanel>
    <TabPanel>
      <PanelInner bgurl='/images/nft/buy/bg.png'>
        <CharacterWrapper>
          <img src='/images/nft/buy/character.png' />
        </CharacterWrapper>
      </PanelInner>     
    </TabPanel>
    <TabPanel>
      <PanelInner bgurl='/images/nft/buy/bg.png'>
        <CharacterWrapper>
          <img src='/images/nft/buy/character.png' />
        </CharacterWrapper>
      </PanelInner>     
    </TabPanel>
  </Tabs>
);

const BuySection = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <BasicTab />
        <Flex column alignCenter>
          <TextWrapper>
            <Text>This enables owners of NFTs to wear their assets across all games and apps across the Chili metaverse. There are many different types of Avatars to choose from, and the possibilities for customization are endless. </Text>
          </TextWrapper>
          <BuyBtn>BUY NFT</BuyBtn>
        </Flex>
      </InnerWrapper>
    </SectionWrapper>
  )
}

export default BuySection;