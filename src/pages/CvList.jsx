import React, { useState, useEffect} from 'react'
import { Menu, Table, Icon, Header } from 'semantic-ui-react'
import CvService from '../services/cvService'

export default function CvList() {


    const [cvies, setCvies] = useState([])

    useEffect (()=>{
        let cvService=new CvService()
        cvService.getCvies().then(result=> setCvies(result.data.data))
    },[])


    return (
        <div>
            <Header size='large'>Cv List</Header>
            <Table celled>
            
                <Table.Header>
                
                    <Table.Row>
                        <Table.HeaderCell>Cv Bilgileri</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cvies.map(cv => (

                            <Table.Row key={cv.id}>
                                <Table.Cell>{cv.firstName}</Table.Cell>
                                <Table.Cell>{cv.lastName}</Table.Cell>
                                <Table.Cell>{cv.email}</Table.Cell>          
                                <Table.Cell>{cv.birthYear}</Table.Cell>
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
