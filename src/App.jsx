import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'

import { Home, News, Partner, Question } from './pages'
import { theme } from './styles/theme'

const AppWithRouter = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/actualités" component={News}/>
        <Route path="/partenaires" component={Partner}/>
        <Route path="/questionnement" component={Question}/>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
