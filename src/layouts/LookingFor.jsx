import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'


export default class MenuExampleVerticalPointing extends Component {
 

  render() {

    return (
      <Dropdown item text="Looking For">
        <Dropdown.Menu>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/employers">Employers</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/candidates">Candidates</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/jobs">Jobs</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
