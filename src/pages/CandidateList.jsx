import React, { useState, useEffect } from 'react'
import CandidateService from '../services/candidateService'
import { Menu, Table, Icon, Header } from 'semantic-ui-react'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect (()=>{
        let candidateService=new CandidateService()
        candidateService.getCandidates().then(result=> setCandidates(result.data.data))
    },[])
    

    return (
        <div>
            <Header size='large'>Candidate List</Header>
            <Table celled>
            
                <Table.Header>
                
                    <Table.Row>
                        <Table.HeaderCell>Aday Adı</Table.HeaderCell>
                        <Table.HeaderCell>Aday Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Aday E-Posta</Table.HeaderCell>
                        <Table.HeaderCell>Aday Doğum Yılı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (

                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>          
                                <Table.Cell>{candidate.birthYear}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='4'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
