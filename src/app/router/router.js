import React from 'react'
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom'

import MainLayout from '../../layouts/MainLayout/mainLayout'
import MainPage from '../../components/MainPage/mainPage'

import notFound from '../../components/404/404'
import sensorPage from '../../components/sensorPage/sensorPage'

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
      <AppRoute exact path='/sensor/:id' layout={MainLayout} component={sensorPage} />
      <AppRoute layout={MainLayout} component={notFound} />
    </Switch>
  )

}

export default withRouter(Routes)
