import React from 'react';
import Goal from './Goal';
import Container from './Container';

const Dashboard = (props)=> {

  function getHeaders() {
    return props.family_members.map((member, i)=> {
     return <th className = "border-none pt-1" key = {`${member}-${i}`}>{member.name}</th>
    })
  }

  function getBody() {
    return props.health_goals.map((meeting, i)=> {
      const date = new Date(meeting.date) 
      return (
        <tr key = {`meeting-${i}`}>
          <td className = "p-4" key = {`${meeting.date}-${i}`}>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</td>
          {props.family_members.map((m, i) => <td key = {`member-${i}`}  className = "p-4">{getGoals(meeting.goals, m.id)}</td>)}
        </tr>
      )
    })
  }

  function getGoals(goals, user) {
    const userGoals = goals.filter(g => g.member_id == user)
    return userGoals.map((g, i) => <Goal goalId = {g.id} key = {`goal-${i}`} text = {g.goal} csrf_token = {props.csrf_token} />)
  }

  return (
    <Container>
      <table className = "w-full border-collapse table-fixed">
        <thead className = "bg-indigo-700 h-10 text-white">
          <tr>
            <th className = "border-none pt-1 w-36">Date</th>
            {getHeaders()}
          </tr>
        </thead>
        <tbody>
          {getBody()}
        </tbody>
      </table>
    </Container>
  )
}

export default Dashboard;
