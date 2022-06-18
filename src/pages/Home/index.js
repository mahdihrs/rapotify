import useHome from './useHome';

import {
  ScrollContainer,
  Section,
  FloatingAlbum,
  CardTitle,
  GenreText,
  WrappedImage,
  SummaryCollection,
  TopGenre,
  Download,
  ImagePreview,
  ImagePreviewWrapper
} from './HomeStyles'
import Card from '../../components/card';
import Login from '../../components/Login';

export default function Home() {
  const {
    accessToken,
    topTracks,
    topArtists,
    topGenres,
    scrollContainer,
    onDownload,
    getArtist,
    imagePreview,
  } = useHome()

  return (
    <div>
      {!accessToken ? <Login /> : (
        <>
          <ScrollContainer id="scroll--container" ref={scrollContainer}>
            <Section>
              <div>
                <h3>Your Top Song</h3>
                <FloatingAlbum>
                  <img src={topTracks?.[0]?.album?.images?.[1]?.url} alt="" />
                </FloatingAlbum>
                <CardTitle>{topTracks?.[0]?.name}</CardTitle>
              </div>
            </Section>
            <Section>
              <div>
                <h3>Your top songs for the last 6 months</h3>
                {topTracks?.map((track) => (
                  <Card
                    key={track?.name}
                    image={track?.album?.images?.[2]?.url}
                    text={`${getArtist(track?.artists)}- ${track?.name}`}
                  />
                ))}
              </div>
            </Section>
            <Section>
              <div>
                <h3>Your Top Artist</h3>
                <FloatingAlbum>
                  <img src={topArtists?.[0]?.images?.[1]?.url} alt="" />
                </FloatingAlbum>
                <CardTitle>{topArtists?.[0]?.name}</CardTitle>
              </div>
            </Section>
            <Section>
              <div className="home--section-wrapper">
                <h3>Your top artists for the last 6 months</h3>
                {topArtists?.map((artist) => (
                  <Card
                    key={artist?.name}
                    image={artist?.images?.[2]?.url}
                    text={artist?.name}
                  />
                ))}
              </div>
            </Section>
            <Section>
              <div className="home--section-wrapper">
                <h3>Your Top Genres</h3>
                {topGenres?.map((genre) => (
                  <Card
                    key={genre?.[0]}
                    text={<GenreText>{genre?.[0]}</GenreText>}
                  />
                ))}
              </div>
            </Section>
            <Section id="home--summary-wrapper">
              <div className="home--section-wrapper">
                <WrappedImage>
                  <img
                    src={topArtists?.[0]?.images?.[1]?.url}
                    alt=""
                  />
                  <div />
                </WrappedImage>
                <div className="home--section-summary">
                  <SummaryCollection>
                    <h6>Top Artists</h6>
                    <ol>
                      {topArtists?.map((artist) => (
                        <li key={artist?.name}>{artist?.name}</li>
                      ))}
                    </ol>
                  </SummaryCollection>
                  <SummaryCollection>
                    <h6>Top Songs</h6>
                    <ol>
                      {topTracks?.map((track) => (
                        <li key={track?.name}>{track?.name}</li>
                      ))}
                    </ol>
                  </SummaryCollection>
                </div>
                <TopGenre>
                  <h6>Top Genre</h6>
                  <GenreText>{topGenres?.[0]?.[0]}</GenreText>
                </TopGenre>
              </div>
            </Section>
            <Section>
              <ImagePreviewWrapper className="home--section-wrapper">
                <ImagePreview src={imagePreview} alt="" />
                <Download onClick={onDownload} id="home--download">Download Image</Download>
              </ImagePreviewWrapper>
            </Section>
          </ScrollContainer>
        </>
      )}
    </div>
  )
}