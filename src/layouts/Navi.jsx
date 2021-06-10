import React, { useState } from 'react'
import {  Container, Menu, Input } from 'semantic-ui-react'
import LogOut from './LogOut'
import LogIn from './LogIn'
import { useHistory } from 'react-router'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleLogOut() {
        setIsAuthenticated(false)
        history.push("/")
    }
    function handleLogIn() {
        setIsAuthenticated(true)
        
    }
    return (
        <div>
            <Menu size='small'>

                <Container>
                    <Menu>
                        {isAuthenticated ? <LogIn logOut={handleLogOut} /> : <LogOut logIn={handleLogIn} />}
                    </Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' iconPosition='left' />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
