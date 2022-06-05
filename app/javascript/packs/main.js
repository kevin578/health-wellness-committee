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

  for (let member_add_credit of member_add_credits) {
    const body = { ...member_add_credit.dataset }
    const crsfToken = document.querySelector("[name='csrf-token']").getAttribute('content')
    member_add_credit.addEventListener('click', ()=> {
      fetch('/add-credit', {
        method: 'POST',
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
  for (let member_use_credit of member_use_credits) {
    const body = { ...member_use_credit.dataset }
    const crsfToken = document.querySelector("[name='csrf-token']").getAttribute('content')
    member_use_credit.addEventListener('click', ()=> {
      fetch('/remove-credit', {
        method: 'DELETE',
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
