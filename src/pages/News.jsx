import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import FullWidthTabs from '../components/FullWidthTabs'

const styles = theme => ({
  main: {
    marginTop: 100,
    [theme.breakpoints.only('xs')]: {
      marginTop: 80
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: 150
    }
  }
})

const News = props => (
  <div className={props.classes.main}>
    <Header />
    <FullWidthTabs />
    <Footer />
  </div>
)

export default withStyles(styles)(News)
