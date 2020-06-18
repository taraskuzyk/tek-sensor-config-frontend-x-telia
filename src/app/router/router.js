import React from 'react'
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom'

import MainLayout from '../../layouts/MainLayout/mainLayout'
import MainPage from '../../components/MainPage/mainPage'

import notFound from '../../components/404/404'
import notFoundLayout from '@/layouts/NotFoundLayout/notFoundLayout'

import SensorPage from '../../components/sensorPage/sensorPage'
import SensorLayout from '@/layouts/SensorLayout/sensorLayout'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => {
    console.log('props', props)

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }} />
)

export const Routes = () => {
  return (
    <Switch>
      <AppRoute exact path='/' layout={MainLayout} component={MainPage} />
      <AppRoute exact path='/sensor/:id' layout={SensorLayout} component={SensorPage} />
      <AppRoute layout={notFoundLayout} component={notFound} />
    </Switch>
  )

}

export default withRouter(Routes)
