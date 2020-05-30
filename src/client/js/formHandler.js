async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formInput = document.getElementById('url_main').value;
    const valid = Client.checkForURL(formInput)
    console.log("::: Form Submitted :::")
    if(!valid){
        alert("Invalid URl");
        return
    }
    console.log("The link is valid");
    await fetch





    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }