import React, { Component } from 'react'

import {
  Layout,
  ProductSection,
  Container,
  SimpleMediaCard
} from '../components'

class Question extends Component {
  render() {
    return (
      <Layout>
        <h1>Question</h1>
        <ProductSection />
        <Container>
          <SimpleMediaCard />
        </Container>
      </Layout>
    )
  }
}

export default Question
