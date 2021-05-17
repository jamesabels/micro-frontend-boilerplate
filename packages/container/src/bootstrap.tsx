import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './App'

import { DashboardTopic } from './eventbus'

declare global {
  interface Window {
    dashboardTopic: any
  }
}

window.dashboardTopic = DashboardTopic

ReactDOM.render(<App />, document.getElementById('root'))
