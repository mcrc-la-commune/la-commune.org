import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles, Grid } from '@material-ui/core'

import { Header, Footer, Container, SimpleMediaCard } from '../components'

const getPosts = () => {
  const webpackRequireContext = require.context(
    '!markdown-with-front-matter-loader!../blog',
    false,
    /\.md$/
  )
  const posts = webpackRequireContext.keys().sort().reverse()
    .reduce((memo, fileName) => {
      // frontmatter and content (actual markdown is loaded on '__content', frontmatter is right on root)
      const frontMatterMarkdown = webpackRequireContext(fileName);
      // remove cd and extension
      fileName = fileName.match(/\.\/([^\.]+)\.*/)[1];
      // extract year and path
      let tokenizedFilename = fileName.match(/^(\d{4}-\d{2}-\d{2})(.*)/)
      // validation
      if (!tokenizedFilename && !tokenizedFilename[1]) {
        throw new Error('no ^YYYY-MM-DD date in blog filename')
      }

      let date = tokenizedFilename[1];
      let jekyllPath = date.split('-').join('/') + tokenizedFilename[2].replace(/^-/, '/');

      return memo.set(jekyllPath, Object.assign({date: date}, frontMatterMarkdown));
    }, new Map())

  return posts
}

const getImage = post => {
  const webpackRequireContext = require.context(
    `!url-loader!../assets/blog`,
    false,
    /\.jpg$/
  )

  return webpackRequireContext(`./${post.image}`)
}

const styles = {
  main: {
    margin: '100px 40px 0'
  }
}

class News extends Component {
  state = {
    posts: getPosts()
  }

  render() {
    const { classes } = this.props
    const { posts } = this.state
    return (
      <div className={classes.main}>
        <Header />
        <Grid container spacing={40}>
          {[...posts.keys()].map(path => {
            const post = posts.get(path)
            const fullPath = `/blog/${path}`
            const title = post.title || path
            const description = post.description
            const image = getImage(post)
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <SimpleMediaCard key={path} image={image} title={title} description={description} />
              </Grid>
            )
          })}
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(News)
