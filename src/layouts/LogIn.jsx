import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function LogIn({logOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="left" src="https://media-exp1.licdn.com/dms/image/C4D03AQENap9HWM4M0Q/profile-displayphoto-shrink_200_200/0/1620415227149?e=1628121600&v=beta&t=9hZgvHRtG-KreqUzeSdWIcD2WbZ_12FCUlCzzVRYvFA"/>
    
                <Dropdown pointing="top left" text="User">
                    <Dropdown.Menu>
                        <Dropdown.Item text="About Me" icon="info"/>
                        <Dropdown.Item onClick={logOut} text="Log-Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
