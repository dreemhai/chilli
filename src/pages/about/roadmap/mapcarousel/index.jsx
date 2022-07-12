import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components/macro';
import Container from '../../../../components/Container';
import './style.css'

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


const CarouselWrapper = styled.div`
  width: 50%;
`

const Slider = styled.div`
  width: 200px;
  height: 600px;
`

const SignBoardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Signboard = styled.div`
  width: 85%;
  background: linear-gradient(180deg, #84203F 0%, #AC3E1C 100%);
  transform: perspective(500px) rotateY(33deg) translate(15%, 0);

  &:before {
    content: '';
    width: 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    transform: perspective(500px) rotateY(-33deg) translate(-100%,0);
    background: #FFD580;
  }

`

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`

const LineImg = styled.div`
  height: 80%;
  background-image: url('/images/about/roadmap/carousel/sign-bg.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const MapCarousel = () => {
  return (
    <div style={{paddingTop: '200px'}} className='roadmap--wrapper'>
      <Container>
        <InnerContainer>
          <CarouselWrapper>
            <Carousel
              responsive={responsive}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlay={false}
              arrows={false}
            >
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
            </Carousel>
          </CarouselWrapper>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default MapCarousel;