import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { SimpleMediaCard } from '../components'

const getPosts = () => {
  const webpackRequireContext = require.context(
    '!markdown-with-front-matter-loader!../blog',
    false,
    /\.md$/
  )
  const posts = webpackRequireContext
    .keys()
    .sort()
    .reverse()
    .reduce((memo, fileName) => {
      // frontmatter and content (actual markdown is loaded on '__content', frontmatter is right on root)
      const frontMatterMarkdown = webpackRequireContext(fileName)
      // remove cd and extension
      fileName = fileName.match(/\.\/([^.]+)\.*/)[1]
      // extract year and path
      let tokenizedFilename = fileName.match(/^(\d{4}-\d{2}-\d{2})(.*)/)
      // validation
      if (!tokenizedFilename && !tokenizedFilename[1]) {
        throw new Error('no ^YYYY-MM-DD date in blog filename')
      }

      let date = tokenizedFilename[1]
      let jekyllPath =
        date.split('-').join('/') + tokenizedFilename[2].replace(/^-/, '/')

      return memo.set(
        jekyllPath,
        Object.assign({ date: date }, frontMatterMarkdown)
      )
    }, new Map())

  return posts
}

class Posts extends Component {
  constructor(props) {
    super(props)
    this.posts = getPosts()
  }

  render() {
    return (
      <Grid container spacing={40}>
        {[...this.posts.keys()].map(path => {
          const post = this.posts.get(path)
          // const fullPath = `/blog/${path}`
          const title = post.title || path
          const description = post.description
          return (
            <Grid key={path} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <SimpleMediaCard
                image={`/img/blog/${post.image}`}
                title={title}
                description={description}
              />
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default Posts
