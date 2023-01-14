const email = document.getElementById("email");
const submit = document.getElementById("submit");
const message = document.getElementById("mssg")
const errorSign = document.getElementById("error-sign")


submit.addEventListener('click', () => {
    const format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if (!format.test(email.value)){
        message.textContent = "Please provide a valid email"
        email.style.border = "solid 2px hsl(0, 93%, 68%)"
        errorSign.classList.add('show')
    } else {
        return
    }
})
