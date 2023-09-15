

function main() {
    let loginBtn = document.querySelector('#login-btn')

    loginBtn.addEventListener('click', _ => {
        let loginDialog = document.querySelector('#login-dialog')
        loginDialog.showModal()
    })

    let loginUsernameInput = document.querySelector('#login-username-input')
    let loginConfirmBtn = document.querySelector('#login-confirm-btn')

    
    loginUsernameInput.addEventListener('change', e => {
        let value = e.target.value
        loginConfirmBtn.value = value
    })

    
}


document.addEventListener('DOMContentLoaded', (ev) => {
    main()
})