import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth'
import AccountBox from '@material-ui/icons/AccountBox'
import cx from 'classnames'
import routes from '../../routes'

import SimpleBottomNavigation from './SimpleBottomNavigation'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 0,
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    zIndex: 100,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      marginLeft: -40,
      top: 0,
      width: 80,
      height: 80
    },
    [theme.breakpoints.down('sm')]: {
      left: '50%'
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: -80,
      top: -22,
      width: 160,
      height: 160
    },
    [theme.breakpoints.down('sm')]: {
      left: '50%'
    },
    [theme.breakpoints.up('md')]: {
      left: 250
    }
  },
  leftIcon: {
    lineHeight: 0,
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0
    }
  },
  subscribe: {
    flexGrow: 0,
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'initial'
    }
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: '0 0 0 180px',
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      padding: 0
    }
  },
  listItemLink: {
    width: 'inherit',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  navLink: {
    color: 'white',
    border: '1px white dashed',
    [theme.breakpoints.down('lg')]: {
      padding: 8
    }
  }
})

class ButtonAppBar extends Component {
  render() {
    const { classes, width } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Avatar
              component={Link}
              to="/"
              className={classes.logo}
              alt="La Commune"
              src={require('../../assets/logo/logo.png')}
            />
            <Typography
              variant="title"
              color="inherit"
              className={classes.title}
            >
              La Commune
            </Typography>
            {isWidthUp('md', width) && (
              <List className={classes.list}>
                {routes.map((route, index) => {
                  if (index === 0) {
                    return null
                  }
                  return (
                    <ListItem className={classes.listItemLink} key={route.path}>
                      <Button
                        component={Link}
                        to={route.path}
                        className={classes.navLink}
                      >
                        {isWidthUp('md', width) && (
                          <div className={classes.leftIcon}>{route.icon}</div>
                        )}
                        {route.label}
                      </Button>
                    </ListItem>
                  )
                })}
              </List>
            )}
            <Button
              variant="contained"
              color="secondary"
              className={classes.subscribe}
            >
              <AccountBox className={cx(classes.leftIcon, classes.iconSmall)} />
              {isWidthUp('sm', width) && 'Adhérer'}
            </Button>
          </Toolbar>
        </AppBar>
        {isWidthDown('sm', width) && <SimpleBottomNavigation />}
      </div>
    )
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withWidth()(withStyles(styles)(ButtonAppBar))
