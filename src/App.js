import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { CategoryList } from './components/CategoryList'
import { Logo } from './components/Logo'
import { PhotoCardList } from './container/PhotoCardList'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <>
              <CategoryList />
              <PhotoCardList categoryId={1} />
            </>
            )
      }
    </div>
  )
}
