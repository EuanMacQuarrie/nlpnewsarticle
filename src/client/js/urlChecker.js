function ValidURL(myURL){
    console.log(":::Running the validURL function:::", myURL)

        var regex = formInput.match("(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)");

        if(regex.test(myURL)){
            alert("A VALID URL");
            return true;
        }else{
            alert("INVALUD URL ENTERED");
            return false
         }
    };
export {ValidURL}