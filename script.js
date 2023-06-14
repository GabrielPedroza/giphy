const formButton = document.querySelector('#btn')

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
}

formButton.addEventListener("click", handleSubmit)