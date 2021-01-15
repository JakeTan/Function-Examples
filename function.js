function greet(text){
    console.log("Welcome to our website " + text);
}

console.log("rest of the code");

function signUp(){
    let name = prompt("What is your name");
    greet(name);
}
//
///
///
signUp();