import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

import { PhotoCard } from '../PhotoCard'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const PhotoCardListComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const PhotoCardList = withPhotos(PhotoCardListComponent)
