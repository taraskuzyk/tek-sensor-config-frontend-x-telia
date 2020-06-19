import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import notFound from '../../components/404/404'
import notFoundLayout from '../../layouts/NotFoundLayout/notFoundLayout'

import SensorPage from '../../components/sensorPage/sensorPage'
import SensorLayout from '../../layouts/SensorLayout/sensorLayout'

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
      <AppRoute exact path='/' layout={SensorLayout} component={SensorPage} />
      <AppRoute layout={notFoundLayout} component={notFound} />
    </Switch>
  )

}

export default withRouter(Routes)
