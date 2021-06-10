import React from 'react';
import EmployerList from '../pages/EmployerList';
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router';
import JobList from '../pages/JobList';
import candidateList from '../pages/CandidateList';
import CvList from '../pages/CvList';



export default function MainDashboard() {

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/employers" component={EmployerList} />
          </Grid.Column>
          <Grid.Column width={16}>
            <Route exact path="/jobs" component={JobList} />
          </Grid.Column>
          <Grid.Column width={16}>
            <Route exact path="/candidates" component={candidateList}/>
          </Grid.Column>
          <Grid.Column>
            <Route exact path="/cv" component={CvList}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}
