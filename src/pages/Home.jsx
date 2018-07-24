import React, { Component } from 'react'

import { Layout, ProductSection } from '../components'

class Home extends Component {
  render() {
    return (
      <Layout image={require('../assets/img/le-roannais.jpg')}>
        <ProductSection />
      </Layout>
    )
  }
}

export default Home
