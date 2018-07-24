import React from 'react'

import Main from './Main'
import Header from './Header'
import Footer from './Footer'

export const Layout = ({ children, image }) => (
  <div>
    <Header image={image} />
    <Main withImage={!!image}>{children}</Main>
    <Footer />
  </div>
)

export default Layout
