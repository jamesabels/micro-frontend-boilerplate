import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Dashboard = React.lazy(() => import('dashboard/Dashboard'))
const Workspace = React.lazy(() => import('workspace/Workspace'))
const Editor = React.lazy(() => import('editor/Editor'))

import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './index.scss'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <div className="grid-container">
          <div className="nav">
            <Nav />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="stage">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/workspace">
                <Workspace />
              </Route>
              <Route path="/editor">
                <Editor />
              </Route>
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </Suspense>
  )
}
