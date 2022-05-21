import React, {useState, useRef, useEffect } from 'react';
import { FiEdit3, FiXSquare, FiThumbsUp, FiThumbsDown, FiChevronLeft, FiChevronRight, FiChevronsLeft, FiPlusCircle } from 'react-icons/fi';

const Goal = (props)=> {
  const initialMode = props.isCurrentMeeting ? 'current' : 'show'
  const [mode, setMode] = useState(initialMode)
  const [inputValue, _setInputValue] = useState(props.text)
  const [goalStatus, _setGoalStatus] = useState(props.goalStatus)
  const [goalId, setGoalId] = useState(props.goalId)
  const goalStatusRef = useRef(goalStatus)
  const goalInput = useRef(null);
  const selectedGoal = useRef(null);

  const handleSelectedGoalOutsideClick = (e)=> handleOutsideClick(selectedGoal, e);
  const handleGoalInputOutsideClick = (e)=> handleOutsideClick(goalInput, e);

  useEffect(()=> {
    if (mode == 'select') {
      document.addEventListener('click', handleSelectedGoalOutsideClick);
    }
    if (mode == 'edit' || mode == 'current') {
      document.addEventListener('click', handleGoalInputOutsideClick);
    }
  }, [mode])

  useEffect(()=> {
    return ()=> {
      document.removeEventListener('click', handleGoalInputOutsideClick)
      document.removeEventListener('click', handleSelectedGoalOutsideClick)
    }
  }, [mode])

  useEffect(()=> {
    if (!props.goalId) {
      newGoal()
    }
    if (goalInput && props.newInput) {
      goalInput.current.focus()
    }
  }, [])

  function setInputValue(i) {
    _setInputValue(i)
    updateGoal(goalStatus, i)
  }

  function setGoalStatus(g) {
     goalStatusRef.current = g;
    _setGoalStatus(g);
    updateGoal(g, inputValue)
  }

  function getGoalBackground() {
    const colors = ['bg-transparent', 'bg-red-500', 'bg-orange-400', 'bg-yellow-300', 'bg-lime-300', 'bg-green-500']
    return colors[goalStatus]
  }

  function shiftGoalStatus(val) {
    if (val === 1 && goalStatus == 5) return;
    if (val === -1 && goalStatus == 1) return;
    const newValue = val + goalStatus;
    setGoalStatus(newValue);
  }

  function handleShowClick() {
    setMode('select');
  }

  function handleEditClick() {
    setMode('edit')
    setTimeout(()=> goalInput.current.focus(), 100)
  }

  function handleOutsideClick(ref, event) {
    if (ref.current && !ref.current.contains(event.target)) {
     if (!(mode == 'current')) setMode('show')
    }
  }

  function newGoal() {
    props.saveGoal('/new-goal', {
      inputValue,
      goalStatus,
      memberId: props.userId,
      meetingId: props.meetingId
    })
    .then((res)=> {
      setGoalId(res.id)
    })
  }

  function updateGoal(g, i) {
    if (!goalId) return
    props.saveGoal('/update-goal', {
      goalId,
      inputValue: i,
      goalStatus: g,
    })
  }

  if (mode == 'current') {
    return (
      <div className = "relative">
        <input ref = {goalInput} onChange = {(e)=> setInputValue(e.target.value)} className = "w-full bg-transparent outline-none py-1 my-1 border-solid border-indigo-700 border-b" type="text" value = {inputValue} />
        <FiXSquare onClick = {()=> props.removeGoal(props.goalId)} className = "mx-1 cursor-pointer absolute right-0 bottom-2"/>
      </div>
    )
  }

  else if (mode == 'show') {
    return (
      <p className = {`py-1 my-1 ${getGoalBackground()}`} onClick = {()=> setMode('select')}>{inputValue}</p>
    )
  } else if (mode == 'select') {
    return (
      <div ref = {selectedGoal}>
        <p className = {`py-1 my-1 cursor-default ${getGoalBackground()}`}>{inputValue}</p>
        <div className = "flex justify-between px-2">
          <span className = "flex">
            <FiThumbsUp onClick = {()=> setGoalStatus(5)} className = "mx-1 cursor-pointer"/>
            <FiChevronLeft onClick = {()=> shiftGoalStatus(1)} className = "mx-1 cursor-pointer"/>
            <FiChevronRight onClick = {()=> shiftGoalStatus(-1)} className = "mx-1 cursor-pointer"/>
            <FiThumbsDown onClick = {()=> setGoalStatus(1)} className = "mx-1 cursor-pointer"/>
            <FiChevronsLeft onClick = {()=> setGoalStatus(0)} className = "mx-1 cursor-pointer"/>
          </span>
          <span className = "flex">
            <FiEdit3 onClick = {()=> handleEditClick()} className = "mx-1 cursor-pointer"/>
            <FiPlusCircle className = "mx-1 cursor-pointer"/>
            <FiXSquare className = "mx-1 cursor-pointer"/>
          </span>
        </div>
      </div>
    )
  }
  else if (mode == 'edit') {
    return (
      <input ref = {goalInput} onChange = {(e)=> setInputValue(e.target.value)} className = "w-full bg-transparent outline-none py-1 my-1 border-solid border-indigo-700 border-b" type="text" value = {inputValue} />
    )
  }
}

export default Goal;
