import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = {
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    margin: '100px 30px 0',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  mainWithImage: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
}

const Main = ({ children, withImage, classes }) => (
  <div className={withImage ? classes.mainWithImage : classes.main}>{children}</div>
)

export default withStyles(styles)(Main)
