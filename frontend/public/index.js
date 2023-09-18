async function main () {
  const loginUsernameInput = document.querySelector('#login-username-input')
  const loginConfirmBtn = document.querySelector('#login-confirm-btn')

  // TODO: Creo que esto se puede hacer de una manera más directa basicamente desde el evento click del loginConfirmBtn accediendo al valor del input mediante el form
  loginUsernameInput.addEventListener('change', e => {
    const value = e.target.value
    loginConfirmBtn.value = value
  })

  loginConfirmBtn.addEventListener('click', event => {
    event.preventDefault()

    const loginBtn = document.querySelector('#login-btn')

    loginBtn.hidden = true

    const headerContainer = document.querySelector('#header-container')

    const loggedUser = document.createElement('span')

    loggedUser.innerText = loginConfirmBtn.value

    headerContainer.appendChild(loggedUser)

    const loginDialog = document.querySelector('#login-dialog')
    loginDialog.open = false
  })
}

document.addEventListener('DOMContentLoaded', (ev) => {
  main()
})
