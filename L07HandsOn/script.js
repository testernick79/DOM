function regexChecker() {
    //Pulls in the users information using the DOM from the HTML form
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    const Regex = /^[A-Z][a-z]+$/;

    if ((firstName.match(Regex)&&lastName.match(Regex))!=null){
        alert("Yay! Your inputs were all correct!")
    }else{
        alert("Oh no! Thats an invalid format!")
    }
        }
