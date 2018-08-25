import React from 'react'
import { Home, News, Partner, Question } from './pages'
import HomeIcon from '@material-ui/icons/Home'
import ViewModule from '@material-ui/icons/ViewModule'
import Map from '@material-ui/icons/Map'
import QuestionAnswer from '@material-ui/icons/QuestionAnswer'

const routes = [
  {
    path: '/',
    label: 'Accueil',
    exact: true,
    component: Home,
    icon: <HomeIcon />
  },
  {
    path: '/actualités',
    label: 'Actualités',
    component: News,
    icon: <ViewModule />
  },
  {
    path: '/partenaires',
    label: 'Partenaires',
    component: Partner,
    icon: <Map />
  },
  {
    path: '/comprendre',
    label: 'Comprendre',
    component: Question,
    icon: <QuestionAnswer />
  }
]

export default routes
