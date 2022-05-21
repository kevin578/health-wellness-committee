import React, { createContext } from 'react';
import HealthMeeting from './HealthMeeting';
import Container from './Container';

export const UserContext = createContext('')

const Dashboard = (props)=> {
  
  function getHeaders() {
    return props.family_members.map((member, i)=> {
     return <th className = "border-none pt-1" key = {`header-${member}-${i}`}>{member.name}</th>
    })
  }


  function getBody() {
    return props.meetings.map((meeting)=> {
      const isCurrentMeeting = props.current_meeting_id == meeting.id
      const date = new Date(meeting.date) 
      return (
        <HealthMeeting key = { `meeting-${meeting.id}` } date = {date} isCurrentMeeting = {isCurrentMeeting} meeting={meeting} family_members={props.family_members} />
      )
    });
  }

  const userContextData = {
    csrf_token: props.csrf_token
  }

  return (
    <UserContext.Provider value = { userContextData }>
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
    </UserContext.Provider>
  )
}

export default Dashboard;
