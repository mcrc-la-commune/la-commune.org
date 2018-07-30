import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fr'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dates from 'react-big-calendar/lib/utils/dates.js'
import events from '../events'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
moment.locale('fr')
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const messages = {
  today: `Aujourd'hui`,
  month: 'Agenda',
  agenda: 'Liste',
  previous: 'Précédent',
  next: 'Suivant'
}

const styles = {
  main: {
    height: '80vh'
  }
}

const Calendar = props => (
  <div className={props.classes.main}>
    <BigCalendar
      views={['month', 'agenda']}
      events={events}
      step={60}
      showMultiDayTimes
      culture="fr"
      max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
      messages={messages}
    />
  </div>
)

export default withStyles(styles)(Calendar)
