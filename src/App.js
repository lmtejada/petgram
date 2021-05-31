import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { CategoryList } from './components/CategoryList'
import { Logo } from './components/Logo'
import { PhotoCardList } from './components/PhotoCardList'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <CategoryList />
    <PhotoCardList />
  </div>
)
