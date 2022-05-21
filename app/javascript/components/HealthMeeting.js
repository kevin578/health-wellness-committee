import React, { useState, useContext } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Goal from './Goal';
import { UserContext } from './Dashboard';


const HealthMeeting = (props)=> {
  const csrf_token = useContext(UserContext).csrf_token;
  const [goals, setGoals] = useState(props.meeting.health_goals)

  function addGoal(memberId) {
    saveGoal('/new-goal', {
      inputValue: '',
      goalStatus: '',
      status: 0,
      memberId,
      meetingId: props.meeting.id
    })
    .then((res)=> {
       let newGoals = [...goals]
       newGoals = newGoals.map(g => ({...g, newInput: false}))
       newGoals = [...newGoals, {id: res.id, goal: res.goal, newInput: true, member_id: memberId, status: res.status, meeting_id: props.meeting.id} ] 
      setGoals(newGoals)
    })
  } 

  function removeGoal(goal_id) {
    let newGoals = [...goals]
    newGoals = newGoals.filter((g => g.id != goal_id))
    setGoals(newGoals)
    saveGoal('/delete-goal', { goal_id }, 'DELETE')
  }

  function getGoals(user) {
    const userGoals = goals.filter(g => g.member_id == user)
    return userGoals.map((g) => (
      <Goal 
        isCurrentMeeting = {props.isCurrentMeeting} 
        meetingId = {g.meeting_id} 
        userId = {user} 
        goalId = {g.id} 
        key = {`goal-${g.id}`} 
        text = {g.goal} 
        csrf_token = {props.csrf_token} 
        goalStatus = {g.status} 
        removeGoal = {removeGoal} 
        newInput = {g.newInput}
        saveGoal = {saveGoal} 
      />)
    ) 
    
  }

  function saveGoal(url, body, method = 'POST') {
    return new Promise((resolve)=> {
      fetch(url, {
        method,
        headers: {
          "X-CSRF-Token": csrf_token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(res => resolve(res))
    })
  }


  return (
    <React.Fragment>
    <tr key = {`meeting-${props.meeting.id}`}>
    <td className = "p-4" key = {`${props.meeting.date}-${props.meeting.id}`}>{`${props.date.getMonth() + 1}/${props.date.getDate() + 1}/${props.date.getFullYear()}`}</td>
    {props.family_members.map((m, i) => 
      <td key = {`member-${props.meeting.id}-${i}`}  className = "p-4">
      {  props.isCurrentMeeting &&
        <FiPlusCircle onClick = {()=> addGoal(m.id)} className = "mx-1 cursor-pointer"/>
      }
      {getGoals(m.id)}
      </td>)}
    </tr>
    </React.Fragment>
  )
}

export default HealthMeeting;
