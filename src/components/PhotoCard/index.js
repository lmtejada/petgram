import React from 'react'
import { Link } from '@reach/router'
import { Article, ImgWrapper, Img } from './styles'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`

  const [show, element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='Photo card' />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({ variables: { input: { id } } })
                    setLiked(!liked)
                  }

                  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
