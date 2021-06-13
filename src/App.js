import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { CategoryList } from './components/CategoryList'
import { Logo } from './components/Logo'
import { PhotoCardList } from './container/PhotoCardList'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <CategoryList />
    <PhotoCardList categoryId={1} />
  </div>
)
