import React, { useState, useEffect } from 'react';
import Goal from './Goal';
import Container from './Container';
import { FiXCircle, FiPlusCircle } from 'react-icons/fi';

const Dashboard = (props)=> {

  const [meetings, setMeetings] = useState(props.meetings)

  function getHeaders() {
    return props.family_members.map((member, i)=> {
     return <th className = "border-none pt-1" key = {`${member}-${i}`}>{member.name}</th>
    })
  }

  function addGoal(member_id) {
    const newMeetings = [...meetings]
    newMeetings.map(m => {
      if (m.id == props.current_meeting_id) {
        m.health_goals.push({goal: 'new goal', member_id, status: 0, isCurrentMeeting: true, meeting_id: props.current_meeting_id})
      }
    })
    setMeetings(newMeetings)
  } 

  function getBody() {
    return meetings.map((meeting, i)=> {
      const isCurrentMeeting = props.current_meeting_id == meeting.id
      const date = new Date(meeting.date) 
      return (
        <tr key = {`meeting-${i}`}>
          <td className = "p-4" key = {`${meeting.date}-${i}`}>{`${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`}</td>
          {props.family_members.map((m, i) => 
            <td key = {`member-${i}`}  className = "p-4">
              {  isCurrentMeeting &&
                <FiPlusCircle onClick = {()=> addGoal(m.id)} className = "mx-1 cursor-pointer"/>
              }
              {getGoals(meeting.health_goals, m.id, isCurrentMeeting)}
            </td>)}
        </tr>
      )
    });
  }

  function getGoals(goals, user, isCurrentMeeting) {
    const userGoals = goals.filter(g => g.member_id == user)
    return userGoals.map((g, i) => <Goal isCurrentMeeting = {isCurrentMeeting} meetingId = {g.meeting_id} userId = {user} goalId = {g.id} key = {`goal-${i}`} text = {g.goal} csrf_token = {props.csrf_token} goalStatus = {g.status} />)
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
