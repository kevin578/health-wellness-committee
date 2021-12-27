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
    return props.health_goals.map((goal)=> {
      const date = new Date(goal.date) 
      
      return (
        <tr>
          <td>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>
          
        </tr>
      )
    })
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
