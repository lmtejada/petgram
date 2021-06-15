import React from 'react'
import { CategoryList } from '../components/CategoryList'
import { PhotoCardList } from '../container/PhotoCardList'

export const Home = ({ categoryId }) => {
  return (
    <>
      <CategoryList />
      <PhotoCardList categoryId={categoryId} />
    </>
  )
}
