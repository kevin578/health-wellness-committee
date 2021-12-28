import React from 'react';
import GoalInput from './GoalInput';
import Container from './Container';
import styled from 'styled-components';

const Table = styled.table`
   width: 100%;
   border-collapse:collapse 
`;

const TableHeader = styled.thead`
    background: #700067;
    height: 40px;
    color: #fff;
`;

const HeaderCell = styled.th`
  border:none;
`;

const DateHeader = styled(HeaderCell)`
  width: 110px;
`;

const Dashboard = (props)=> {

  function getHeaders() {
    return props.family_members.map((member, i)=> {
     return <HeaderCell key = {`${member}-${i}`}>{member.name}</HeaderCell>
    })
  }
  console.log(props)

  function getBody() {
    return props.health_goals.map((meeting, i)=> {
      const date = new Date(meeting.date) 
      return (
        <tr>
          <td key = {`${meeting.date}-${i}`}>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>
          {props.family_members.map(m => <td>{getGoals(meeting.goals, m.id)}</td>)}
        </tr>
      )
    })
  }

  function getGoals(goals, user) {
    const userGoals = goals.filter(g => g.member_id == user)
    return userGoals.map(g => <p>{g.goal}</p>)
  }

  return (
    <Container>
      <Table>
        <TableHeader>
          <tr>
            <DateHeader>Date</DateHeader>
            {getHeaders()}
          </tr>
        </TableHeader>
        <tbody>
          {getBody()}
        </tbody>
      </Table>
    </Container>
  )
}

export default Dashboard;
