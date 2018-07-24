import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => {
  console.log('theme', theme)
  return ({
    container: {
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      width: '100%',

      "@media (min-width: 576px)": {
        maxWidth: "540px"
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px"
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px"
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px"
      }
    }
  })
}

export const Container = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
)

Container.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Container)
