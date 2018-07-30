import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardContent: {
    flexGrow: 1
  },
  media: {
    height: 180
  }
}
// <img src={`/img/blog/${image}`} alt={`${title} - Couverture`} />
const SimpleMediaCard = ({ classes, title, description, image, date }) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={image} title={title} />
    <CardContent className={classes.cardContent}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography
            gutterBottom
            variant="headline"
            align="left"
            component="h2"
          >
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
  image: PropTypes.string.isRequired
}

export default withStyles(styles)(SimpleMediaCard)
