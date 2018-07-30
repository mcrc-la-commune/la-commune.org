import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import routes from '../../routes'

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50
  },
  nav: {
    height: 'inherit'
  },
  action: {
    paddingBottom: 0
  }
}

class SimpleBottomNavigation extends Component {
  constructor(props) {
    super(props)
    const index = routes.findIndex(
      route => props.location.pathname === route.path
    )
    this.state = {
      value: index === -1 ? 0 : index
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <Paper elevation={24} className={classes.root}>
        <BottomNavigation
          className={classes.nav}
          value={value}
          onChange={this.handleChange}
          showLabels
        >
          {routes.map((route, index) => (
            <BottomNavigationAction
              className={classes.action}
              key={index}
              component={Link}
              to={route.path}
              label={route.label}
              icon={route.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    )
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(SimpleBottomNavigation))
