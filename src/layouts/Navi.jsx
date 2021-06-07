import React from 'react'
import { Button, Container, Menu, Input } from 'semantic-ui-react'
import CandidateLogIn from './CandidateLogIn'
import CandidateRegister from './CandidateRegister'
import EmployerLogIn from './EmployerLogIn'
import EmployerRegister from './EmployerRegister'

export default function Navi() {
    return (
        <div>
            <Menu  size='small'>
                <Container>
                    <Menu.Item>
                        <Button primary>Employer Sign up</Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button primary>Sign up</Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button>Log-in</Button>
                    </Menu.Item>

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
