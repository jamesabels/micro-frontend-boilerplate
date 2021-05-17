import React from 'react'
import { Navbar, Button, Alignment } from '@blueprintjs/core'

function increment () {
  window.dashboardTopic.count++
}

function deincrement () {
  window.dashboardTopic.count--
}

function Nav() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Button className="bp3-minimal" icon="plus" text="Increment" onClick={increment}/>
        <Button className="bp3-minimal" icon="minus" text="Deincrement" onClick={deincrement}/>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button className="bp3-minimal" icon="user" text="Login" />
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="people" text="Signup" />
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav
