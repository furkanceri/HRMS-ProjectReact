import React from 'react';
import EmployerList from '../pages/EmployerList';
import { Grid } from 'semantic-ui-react'



export default function MainDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}
