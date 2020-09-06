function documentIsReady(fn) {
  if ( document.readyState === "complete" || document.readyState !== "loading" ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

documentIsReady(()=> {
  document.querySelectorAll(`[data-button-type="addGoal"]`).forEach((e)=> {
    e.addEventListener('click', handleClick)
  })
})

function handleClick(e) {
  const id =  e.target.getAttribute("data-goal-target");
  const itemContainer = document.getElementById(id);
  const newItem = document.createElement('li');
  const value = itemContainer.parentNode.querySelector('input.dashboard-goal-input').value
  if (value) {
    newItem.innerHTML = value;
    itemContainer.appendChild(newItem);
  }
}

