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
    await fetch('http://localhost:8080/results',{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify({url: formInput})
    })
    .then(response => response.json())
    .then(function(response) {
        document.getElementById('polarity').innerHTML = response.polarity;
        document.getElementById('subjectivity').innerHTML = response.subjectivity;
        document.getElementById('confidence').innerHTML = response.confidence;
        document.getElementById('text').innerHTML = response.text;
        console.log(response);
    }).catch((error) =>{
        console.log(error)
    })
};
export { handleSubmit }