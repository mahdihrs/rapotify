import styled from 'styled-components';

export const ScrollContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
	scroll-snap-type: y mandatory;
  color: #FFFFFF;
  position: relative;
`

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #CDC2AE;

  &:nth-child(2n) {
    background-color: #393E46;
  }
  
  &:nth-child(3n) {
    background-color: #00ADB5;
  }

  &:nth-child(4n) {
    background-color: #3F72AF;
  }

  .home--section-wrapper {
    width: 100%;
  }
  .home--section-summary {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
  }
  > div > h3 {
    text-align: center;
    font-size: 25px;
    font-weight: 800;
  }

  @media screen and (max-height: 568px) {
    > div > h3 {
      font-size: 20px;
      font-weight: 700;
    }
  }
`

export const FloatingAlbum = styled.div`
  img {
    border-radius: 20px;
    box-shadow: -10px 10px;
  }
  @media screen and (max-width: 325px) {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
`

export const CardTitle = styled.h6`
  font-size: 30px;
  text-align: center;
  margin: 2rem 0 0;
`

export const GenreText = styled.span`
  text-transform: capitalize;
`

export const WrappedImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 4rem;

  > img {
    width: 200px;
    position: absolute;
    top: -50px;
  }
  > div {
    width: 300px;
    height: 120px;
    background: #D5D8B5;
  }
`

export const SummaryCollection = styled.div`
  > h6 {
    margin: 0 0 1rem 0;
    font-size: 20px;
    font-weight: 800;
  }
  > ol {
    padding-inline-start: 20px;
  }
`

export const TopGenre = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h6 {
    font-size: 20px;
    font-weight: 800;
    margin: 2rem 0 10px 0;
  }

  > span {
    font-size: 20px;
    font-weight: 600;
  }
`

export const Download = styled.button`
  border-radius: 10px;
  background: #1ed760;
  color: #000000;
  border: none;
  padding: 10px 1rem;
  box-shadow: 2px 2px #000000;
`

export const ImagePreview = styled.img`
  width: 80%;
  margin-bottom: 1rem;
`

export const ImagePreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
`