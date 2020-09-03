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
  const itemContainer = document.getElementById('dashboard-left-added-items');
  const newItem = document.createElement('li');
  newItem.innerHTML = "new thing";
  itemContainer.appendChild(newItem);
}

