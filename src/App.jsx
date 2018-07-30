import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { ScrollToTop } from './components'
import { theme } from './styles/theme'
import routes from './routes'

const AppWithRouter = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <ScrollToTop>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </ScrollToTop>
    </BrowserRouter>
  </MuiThemeProvider>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
