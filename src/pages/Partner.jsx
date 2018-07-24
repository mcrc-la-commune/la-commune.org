import React, { Component } from 'react'

import {
  Layout,
  ProductSection,
  Container,
  SimpleMediaCard
} from '../components'

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1>Partner</h1>
        <ProductSection />
        <Container>
          <SimpleMediaCard />
        </Container>
      </Layout>
    )
  }
}

export default Home
