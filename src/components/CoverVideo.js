import React from 'react'
import GIF from '../assets/Home Video.mp4'
import styled from 'styled-components'

const CoverVideo = () => {

  const VideoContainer = styled.div`
  width: 100%;

  video{
    width: 100%;
    height: auto;

  }
  `
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo