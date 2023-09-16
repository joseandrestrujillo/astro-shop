

async function main() {
    let loginBtn = document.querySelector('#login-btn')

    loginBtn.addEventListener('click', _ => {
        let loginDialog = document.querySelector('#login-dialog')
        loginDialog.showModal()
    })

    let loginUsernameInput = document.querySelector('#login-username-input')
    let loginConfirmBtn = document.querySelector('#login-confirm-btn')

    // TODO: Creo que esto se puede hacer de una manera más directa basicamente desde el evento click del loginConfirmBtn accediendo al valor del input mediante el form
    loginUsernameInput.addEventListener('change', e => {
        let value = e.target.value
        loginConfirmBtn.value = value
    })

    loginConfirmBtn.addEventListener('click', event => {
        event.preventDefault()

        let loginBtn = document.querySelector('#login-btn')
        
        loginBtn.hidden = true

        let headerContainer = document.querySelector("#header-container")
        
        let loggedUser = document.createElement("span")

        loggedUser.innerText = loginConfirmBtn.value

        headerContainer.appendChild(loggedUser)

        let loginDialog = document.querySelector('#login-dialog')
        loginDialog.open = false
    })

    let products = await getProducts()
    let ulElement = document.createElement('ul')
    ulElement.classList = ["products-ul"]
    products.forEach(product => {
        let liElement = document.createElement('li')
        liElement.classList = ["product-li"]

        let imgElement = document.createElement('img')
        imgElement.src = product.image
        imgElement.classList = ["product-image"]

        let pElement = document.createElement('p')
        pElement.innerText = product.title
        pElement.classList = ["product-title"]


        liElement.appendChild(imgElement)
        liElement.appendChild(pElement)

        ulElement.appendChild(liElement)
    });

    document.querySelector('main').appendChild(ulElement)
}

async function getProducts() {
    return await fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json()) 
}

document.addEventListener('DOMContentLoaded', (ev) => {
    main()
})