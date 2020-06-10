async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formInput = document.getElementById('url_main').value;
    const valid = Client.ValidURL(formInput)
    console.log("::: Form Submitted :::")
    if(!valid){
        alert("Invalid URl");
        return
    }
    console.log("The link is valid");
    await fetch('http://localhost:8081/results',{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify({url: url_main})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('text').innerHTML = res.text;
    })
}
export { handleSubmit }