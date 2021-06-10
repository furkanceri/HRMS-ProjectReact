import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function LogOut(logIn) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={logIn}> Log-In </Button>
                <Button primary style={{marginLeft:"0.5em"}}>Register</Button>
            </Menu.Item>
        </div>
    )
}
