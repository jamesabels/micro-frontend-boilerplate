import React from 'react'
import { Navbar, Button, Alignment, Text } from '@blueprintjs/core'

function Footer() {
  return (
    <Navbar>
        <div className="footer">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Blueprint</Navbar.Heading>
            </Navbar.Group>
        </div>
    </Navbar>
  )
}

export default Footer
