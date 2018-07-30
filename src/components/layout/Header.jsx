import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridContainer from '../Grid/GridContainer'
import GridItem from '../Grid/GridItem'
import Parallax from '../Parallax'
import Container from '../Container'
import Bar from './Bar'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: 'center',
    color: theme.palette.secondary.main
  }
})

function SimpleAppBar(props) {
  const { classes, image } = props
  return (
    <div className={classes.root}>
      <Bar />
      {image && (
        <Parallax filter image={image}>
          <Container>
            <GridContainer>
              <GridItem>
                <h1 className={classes.title}>La Commune</h1>
                <h4 className={classes.title}>
                  La monnaie locale complémentaire du Roannais
                </h4>
              </GridItem>
            </GridContainer>
          </Container>
        </Parallax>
      )}
    </div>
  )
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleAppBar)
