import React from "react"
import { Link } from "react-router-dom"
import { useSnapshot } from "valtio"
import { Button, Card, Icon } from "@blueprintjs/core"

import "./index.scss"

function Dashboard() {
  const snap = useSnapshot(window.dashboardTopic)

  return (
    <div className="dashboard">
      <Card className="dashboard-card" elevation={2}>
        <div className="icon-wrap">
          <Icon icon="home" iconSize={60} intent='danger'/>
        </div>
        <Link to="/">
          <Button fill minimal large>Home</Button>
        </Link>
      </Card>
      <Card className="dashboard-card" elevation={2}>
        <div className="icon-wrap">
          <Icon icon="layout-hierarchy" iconSize={60} intent='danger'/>
        </div>
        <Link to="/workspace">
          <Button fill minimal large>Workspace</Button>
        </Link>
      </Card>
      <Card className="dashboard-card" elevation={2}>
        <div className="icon-wrap">
          <Icon icon="code-block" iconSize={60} intent='danger'/>
        </div>
        <Link to="/editor">
          <Button fill minimal large>Editor</Button>
        </Link>
      </Card>
      <Card className="dashboard-card" elevation={2}>
        <div className="icon-wrap">
          <Icon icon="variable" iconSize={60} intent='danger'/>
        </div>
          {snap.count}
      </Card>
    </div>
  )
}

export default Dashboard
