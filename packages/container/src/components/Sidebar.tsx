import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'

function Sidebar() {
  return (
    <div>
      <div className="sidebar-wrap">
        <div className="sidebar-item">
          <Link to="/">
            <Button minimal large fill icon="home">
              Home
            </Button>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/workspace">
            <Button minimal large fill icon="box">
              Workspace
            </Button>
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/editor">
            <Button minimal large fill icon="code-block">
              Editor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
