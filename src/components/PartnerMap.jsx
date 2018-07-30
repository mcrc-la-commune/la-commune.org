import React, { Component, StrictMode } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import withStyles from '@material-ui/core/styles/withStyles'
import 'leaflet/dist/leaflet.css'

const styles = theme => ({
  map: {
    position: 'fixed',
    top: 66,
    left: 0,
    right: 0,
    bottom: 0,
    [theme.breakpoints.only('sm')]: {
      top: 64
    },
    [theme.breakpoints.only('xs')]: {
      top: 56
    }
  }
})

class PartnerMap extends Component {
  state = {
    lat: 46.0238,
    lng: 4.0526,
    zoom: 12
  }

  render() {
    const { classes } = this.props
    const position = [this.state.lat, this.state.lng]
    return (
      <StrictMode>
        <Map center={position} zoom={this.state.zoom} className={classes.map}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </StrictMode>
    )
  }
}

export default withStyles(styles)(PartnerMap)
