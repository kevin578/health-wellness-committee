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
  return (
    <Container>
      <Table>
        <TableHeader>
          <tr>
            <DateHeader>Date</DateHeader>
            <HeaderCell>Kevin</HeaderCell>
            <HeaderCell>Alissa</HeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Dashboard;
