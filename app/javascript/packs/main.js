function documentIsReady(fn) {
  if ( document.readyState === "complete" || document.readyState !== "loading" ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

documentIsReady(()=> {
  handleProfileCredits()
})
  
function handleProfileCredits() {
  const member_use_credits = document.querySelectorAll('.member_use_credit')  
  if (!member_use_credits.length) return;
  const member_add_credits = document.querySelectorAll('.member_add_credit')  
  updateCredits(member_add_credits, 'POST', '/add-credit')
  updateCredits(member_use_credits, 'DELETE', '/remove-credit')
}

function updateCredits(elems, method, url) {
  for (let el of elems) {
    const body = { ...el.dataset }
    const crsfToken = document.querySelector("[name='csrf-token']").getAttribute('content')
    el.addEventListener('click', ()=> {
      fetch(url, {
        method: method,
        headers: {
          'X-CSRF-Token': crsfToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(res => {
        const el = document.getElementById(`member-credit-count-${body.receivingMemberId}`)
        el.innerHTML = res.count
      })
    })
  }
}
