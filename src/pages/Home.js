import React from 'react'

import { CategoryList } from '../components/CategoryList'
import { Layout } from '../components/Layout'
import { PhotoCardList } from '../container/PhotoCardList'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
      <CategoryList />
      <PhotoCardList categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
