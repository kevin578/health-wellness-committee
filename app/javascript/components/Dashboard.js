import React, { createContext } from 'react';
import HealthMeeting from './HealthMeeting';

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
      <div className = 'container'>
        <table className = "w-full border-collapse table-fixed">
          <thead className = "h-10">
            <tr>
              <th className = "border-none pt-1 w-36">Date</th>
              {getHeaders()}
            </tr>
          </thead>
          <tbody>
            {getBody()}
          </tbody>
        </table>
      </div>
    </UserContext.Provider>
  )
}

export default Dashboard;
