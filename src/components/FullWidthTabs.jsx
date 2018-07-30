import React from 'react'

import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Dashboard from '@material-ui/icons/Dashboard'
import Schedule from '@material-ui/icons/Schedule'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

import Calendar from '../components/Calendar'
import Posts from '../components/Posts'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

const styles = theme => ({
  root: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      paddingTop: 40
    }
  },
  appBar: {
    top: 66,
    zIndex: 5
  },
  fab: {
    zIndex: 50,
    position: 'fixed',
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 2
  }
})

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.handleChangeIndex(value)
  }

  handleChangeIndex = index => {
    window.scrollTo(0, 0)
    this.setState({ value: index })
  }

  handleToogleIndex = () => {
    const value = this.state.value === 0 ? 1 : 0
    this.handleChangeIndex(value)
  }

  render() {
    const { classes, theme, width } = this.props
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    }
    const fabs = [
      {
        color: 'secondary',
        className: classes.fab,
        icon: <Dashboard />
      },
      {
        color: 'secondary',
        className: classes.fab,
        icon: <Schedule />
      }
    ]

    return (
      <div className={classes.root}>
        {isWidthUp('md', width) ? (
          <AppBar position="fixed" color="default" className={classes.appBar}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Nos Articles" icon={<Dashboard />} />
              <Tab label="Notre agenda" icon={<Schedule />} />
            </Tabs>
          </AppBar>
        ) : (
          fabs.map((fab, index) => (
            <Zoom
              key={fab.color}
              in={this.state.value !== index}
              timeout={transitionDuration}
              style={{
                transitionDelay: `${
                  this.state.value === index ? transitionDuration.exit : 0
                }ms`
              }}
              unmountOnExit
            >
              <Button
                variant="fab"
                className={fab.className}
                color={fab.color}
                onClick={this.handleToogleIndex}
              >
                {fab.icon}
              </Button>
            </Zoom>
          ))
        )}
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Posts />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Calendar />
          </TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(FullWidthTabs)
)
