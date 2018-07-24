import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  section: {
    padding: '70px 0'
  }
}

export const Section = ({ children, classes }) => (
  <div className={classes.section}>{children}</div>
)

Section.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Section)
