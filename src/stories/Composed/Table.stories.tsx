import { Story } from '@storybook/react'
import { Table } from '../../'
import { Flex } from '../../components/Flex'
import data from './data'

export default {
  title: 'Composed/Table',
  component: Table,
  argTypes: {},
}

export const Simple: Story<{}> = () => {
  return (
    <Table>
      <Table.Row border>
        <Table.Header></Table.Header>
        <Table.Header>Name:</Table.Header>
        <Table.Header>Title:</Table.Header>
        <Table.Header>Tags:</Table.Header>
      </Table.Row>
      {data.map(champ => (
        <Table.Row border>
          <Table.Cell>
            <Flex alignItems="center">
              <img
                alt="champion-icon"
                style={{ width: 30, height: 30, borderRadius: 15 }}
                src={champ.icon}
              />
            </Flex>
          </Table.Cell>
          <Table.Cell>{champ.name}</Table.Cell>
          <Table.Cell>{champ.title}</Table.Cell>
          <Table.Cell>{champ.tags.join(', ')}</Table.Cell>
        </Table.Row>
      ))}
    </Table>
  )
}
Simple.args = {}
