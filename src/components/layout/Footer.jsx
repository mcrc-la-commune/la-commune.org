import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import withStyles from '@material-ui/core/styles/withStyles'
import Favorite from '@material-ui/icons/Favorite'

import { container, primaryColor } from '../material-kit-react.jsx'

const styles = theme => ({
  block: {
    [theme.breakpoints.down('sm')]: {
      padding: '10px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0.9375rem'
    },
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    [theme.breakpoints.up('md')]: {
      float: 'left!important'
    },
    display: 'block'
  },
  right: {
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      padding: '0 0 10px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '15px 0',
      float: 'right!important'
    }
  },
  footer: {
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0 71px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '15px 0'
    },
    textAlign: 'center',
    display: 'flex',
    zIndex: '2',
    position: 'relative'
  },
  a: {
    color: primaryColor,
    textDecoration: 'none',
    backgroundColor: 'transparent'
  },
  footerWhiteFont: {
    '&,&:hover,&:focus': {
      color: '#FFFFFF'
    }
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px'
  }
})

function Footer({ ...props }) {
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , fait avec{' '}
          <Favorite className={classes.icon} /> par{' '}
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
            rel="noopener noreferrer"
          >
            Simon
          </a>
          .
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
}

export default withStyles(styles)(Footer)
