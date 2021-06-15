import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'

import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
    </div>
  )
}
