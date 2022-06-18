import { useState, useEffect } from 'react'
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom'
import { getTopTracks } from '../../services/spotify'
import getToken from '../../utils/getToken'

export default function useHome() {
  const navigate = useNavigate()
  const accessToken = getToken()
  const [refNode, setRefNode] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [topTracks, setTopTracks] = useState(null)
  const [topArtists, setTopArtists] = useState(null)
  const [topGenres, setTopGenres] = useState(null)

  const handleAppearance = (event) => {
    const node = event.target;
    const screenAppear = Math.ceil(node.scrollTop / node.clientHeight)
    setCurrentScreen(screenAppear === 0 ? 1 : screenAppear)
  };

  useEffect(() => {
    return () => refNode?.removeEventListener('scroll', handleAppearance);
  }, [refNode]);

  const scrollContainer = (node) => {
    if (node) {
      node.addEventListener('scroll', handleAppearance);
      setRefNode(node);
    }
  };

  const isExpired = Date.now() > Number(window.atob(localStorage.getItem('_act_exp_')))
  if (accessToken && isExpired) {
    localStorage.removeItem('_act_')
    localStorage.removeItem('_act_exp_')
    navigate('/')
  }

  const fetchTopTracks = async () => {
    const fetchedTopTracks = await getTopTracks('tracks')
    setTopTracks(fetchedTopTracks?.data?.items)
  }

  const fetchTopGenres = async () => {
    const fetchedTop50Artists = await getTopTracks('artists', 50)
    setTopArtists(fetchedTop50Artists?.data?.items?.slice(0, 5))
    const data50Artists = fetchedTop50Artists?.data?.items
    let genres = {}

    for (const item of data50Artists) {
      const itemGenres = item.genres
      for (const genre of itemGenres) {
        if (genres.hasOwnProperty(genre)) {
          genres = {
            ...genres,
            [genre]: genres[genre] + 1,
          }
        } else {
          genres = {
            ...genres,
            [genre]: 0
          }
        }
      }
    }

    let sortableGenres = []
    for (const eachGenre in genres) {
      sortableGenres.push([eachGenre, genres[eachGenre]])
    }
    const sortedGenres = sortableGenres.sort(function(a, b) {
      return b[1] - a[1];
    });
    const top5Genres = sortedGenres.slice(0, 5)
    setTopGenres(top5Genres)
  }

  useEffect(() => {
    if (accessToken) {
      fetchTopTracks()
      fetchTopGenres()
    }
  }, [accessToken])

  const onDownload = () => {
    saveAs(imagePreview, 'image.png')
  }

  const getArtist = (list) => {
    const nameList = list.map((eachArtist) => eachArtist.name)
    return nameList.join(', ')
  }

  const handleDownload = () => {
    const node = document.getElementById('home--summary-wrapper');

    toPng(node)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        setImagePreview(dataUrl)
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  useEffect(() => {
    if (currentScreen === 2) {
      handleDownload()
    }
  }, [currentScreen])

  return {
    accessToken,
    topTracks,
    topArtists,
    topGenres,
    scrollContainer,
    onDownload,
    getArtist,
    imagePreview,
  }
}