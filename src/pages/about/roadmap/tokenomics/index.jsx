import styled from 'styled-components/macro'
import Container from '../../../../components/Container'
import Flex from '../../../../components/Flex'

const SectionWrapper = styled.div`
    padding-top: 100px;
`

const InnerWrapper = styled.div`
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
    padding: 10px;

    @media (min-width: 768px) {
        padding: 157px 0;
    }
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
  margin-bottom: 18px;
`

const Content = styled.div`
    padding-right: 20%;    
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

const ChartWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 80px;

    display: flex;
    justify-content: flex-end;
`

const PieChart = styled.div`
    width: 80%;

    img {
        width: 100%;
    }
`

const PartDesc = styled.div`
   position: absolute;
   width: 80px;
   top: ${props => props.mtop ? props.mtop : "0"};
   left: ${props => props.mleft ? props.mleft : "0"};

   span {
    color: #FFF;
    font-family: 'GilroyLight';
    font-size: 14px;
    line-height: 15px;
   }
`

const Cloud = styled.div`
    position: absolute;
    transform: translate(0, -50%);
    top: ${props => props.top ? props.top : "0"};
    left: ${props => props.left ? props.left : "0"};
`

const Tokenomics = () => {
    return (
        <SectionWrapper>
            <Container>
                <InnerWrapper>
                    <Flex column justifyCenter>
                        <Title>
                            <Heading>
                                TOKENOMICS
                            </Heading>
                        </Title>
                        <Content>
                            <Text>
                                This is the project's predominant currency, which had a total supply of 1 quadrillion tokens when it was launched.
                            </Text>
                        </Content>
                    </Flex>
                    <Flex>
                        <ChartWrapper>
                            <PieChart>
                                <img src='/images/about/roadmap/pie-chart.png' />
                            </PieChart>
                            <PartDesc top='3%' left='-17%' mtop='-6%' mleft='0%'>
                                <Flex column alignEnd>
                                    <span>18%</span>
                                    <span style={{textAlign: 'right'}}>Research &#38; Development</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='15%' left='-19%' mtop='9%' mleft='-6%'>
                                <Flex column alignEnd>
                                    <span>10%</span>
                                    <span style={{textAlign: 'right'}}>Team &#38; Advisors</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='30%' left='-2%' mtop='27%' mleft='0%'>
                                <Flex column alignEnd>
                                    <span>20%</span>
                                    <span>Treasury</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='41%' left='17%' mtop='40%' mleft='19%'>
                                <Flex column alignEnd>
                                    <span>2.5%</span>
                                    <span>Airdrops</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='20%' left='58%' mtop='17%' mleft='65%'>
                                <Flex column>
                                    <span>30%</span>
                                    <span>Farming&nbsp;/&nbsp;Staking</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='9%' left='60%' mtop='9%' mleft='69%'>
                                <Flex column>
                                    <span>2.5%</span>
                                    <span>Bounties</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='4%' left='43%' mtop='1%' mleft='53%'>
                                <Flex column>
                                    <span>15%</span>
                                    <span>Private&nbsp;Rounds</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc top='-2%' left='40%' mtop='-7%' mleft='50%'>
                                <Flex column>
                                    <span>2%</span>
                                    <span>Public&nbsp;&#123;Lunchpads&#125;</span>
                                </Flex>
                            </PartDesc>
                        </ChartWrapper>
                    </Flex>
                </InnerWrapper>
                {/* <Cloud top='0px' left='0px'>
                    <img src='/images/about/roadmap/clouds/1.png' />
                </Cloud>
                <Cloud top='72%' left='0px'>
                    <img src='/images/about/roadmap/clouds/2.png' />
                </Cloud> */}
            </Container>
        </SectionWrapper>
    )
}

export default Tokenomics;