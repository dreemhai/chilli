import { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import teaserVideo from '../../../assets/video/Chilliswap_Teaser.mp4'

const SectionWrapper = styled.div`
	position: relative;
	z-index: 1;
	overflow: hidden;
`;

const Video = styled.video`
	position: relative;
	width: 100vw;
	height: auto;
	max-height: 100vh;
	object-fit: cover;
`

const MuteBtn = styled.div`
	position: absolute;
	z-index: 2;
	width: 25px;
	height: 22px;
	bottom: 30px;
	right: 30px;

	background-image: url(${props => props.muted ? '/images/about/unmute.png' : '/images/about/mute.svg'});
	background-size: contain;
	background-repeat: no-repeat;
	background-size: center;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 36px;
		height: 30px;
		bottom: 100px;
		right: 100px;
	}
`

const VideoSection = () => {
	const el = useRef();
	const videoRef = useRef();
	const [appeared, appear] = useState(false);
	const [muted, mute] = useState(true);

	const handleMute = () => {
		mute(!muted)
	}

	function handleScroll() {
		const {top} = el.current.getBoundingClientRect();
    const { innerWidth: width, innerHeight: height } = window;

		if (top * 2 < height) {
			appear(true);
    }
    else {
			appear(false);
		}
	}

	useEffect(() => {
		if  (!appeared) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}, [appeared])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [])

  return (
    <SectionWrapper ref={el}>
      <Video ref={videoRef} loop muted={muted}>
        <source src={teaserVideo} type="video/mp4" />
      </Video>
			<MuteBtn onClick={() => handleMute()} muted={muted}>
			</MuteBtn>
    </SectionWrapper>
  );
};

export default VideoSection;
