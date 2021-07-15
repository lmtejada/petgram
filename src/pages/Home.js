import React from 'react'

import { CategoryList } from '../components/CategoryList'
import { Layout } from '../components/Layout'
import { PhotoCardList } from '../container/PhotoCardList'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
      <CategoryList />
      <PhotoCardList categoryId={categoryId} />
    </Layout>
  )
}
