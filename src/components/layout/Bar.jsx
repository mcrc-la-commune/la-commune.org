import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar
} from '@material-ui/core'
import Container from '../Container'

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main
  },
  logo: {
    position: 'absolute',
    left: 100,
    top: -30,
    width: 160,
    height: 160
  },
  list: {
    padding: '0 0 0 200px'
  },
  listLeft: {
    padding: 0
  },
  listItemRight: {
    float: 'right',
    width: 'inherit'
  },
  listItemLink: {
    float: 'left',
    width: 'inherit',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  navLink: {
    color: 'white',
    border: '1px white dashed'
  }
})

const ListItemLink = withStyles(styles)((props) => {
  const { classes, primary, to } = props

  return (
    <ListItem className={classes.listItemLink}>
      <Button
        component={Link}
        to={to}
        className={classes.navLink}
        color="transparent"
      >
        {primary}
      </Button>
    </ListItem>
  )
})

const Bar = (props) => {
  const { classes } = props

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Container>
          <Avatar component={Link} to="/" className={classes.logo} alt="La Commune" src={require('../../assets/logo/logo.png')} />
          <List className={classes.list}>
            <ListItemLink primary="Actualités" to="/actualités" />
            <ListItemLink primary="Partenaires" to="/partenaires" />
            <ListItemLink primary="Questionnement ?" to="/questionnement" />
          </List>
          <List className={classes.list}>
            <ListItem className={classes.listItemRight}>
              <Button
                variant="contained"
                color="secondary"
              >
                Adhérer
              </Button>
            </ListItem>
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Bar)
