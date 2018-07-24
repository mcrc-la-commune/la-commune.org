import React from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid
} from '@material-ui/core'

const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    height: 180,
  }
}

const SimpleMediaCard = ({ classes, title, description, image, date }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={image}
      title={title}
    />
    <CardContent className={classes.cardContent}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="headline" align="left" component="h2">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Typography gutterBottom color="textSecondary">
        {date}
      </Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button component="a" href={'theme.href'} size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card>
)

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
