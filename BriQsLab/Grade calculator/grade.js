function saveName() {
    let name = document.getElementById("name").value;
    localStorage.setItem("username", name);
    displayWelcomeMessage();

}

function displayWelcomeMessage() {
    let storedName = localStorage.getitem("username");
    if (storedName) {
        document.getElementById("welcome").innerText = 'Welcome, ${storedName}!';
    }
}


function DisplayGrade() {
    var score = parseInt(document.getElementById('score').value);
    // var answer = document.getElementById('answer');

    if (score >= 90) {
        // var result = A;
        // answer.value = result;
        alert ('A')
    } if (score <= 80) {
        // var result = B;
        // answer.value = result;
        alert ('B')
    } if (score <= 70) {
        // var result = C;
        // answer.value = result;
        alert ('C')
    } if (score <= 60) {
        // var result = D;
        // answer.value = result;
        alert ('D')
    } if (score <= 50) {
        // var result = E;
        // answer.value = result;
        alert ('E')
    } if (score <= 40) {
        // var result = F;
        // answer.value = result;
        alert ('F')
    } else {
        alert ('Invalid score!')
    }

    if (isNaN(score)) {
        alert ('Invalid score!')
    } 
    // else {
    //     let grade = DisplayGrade(score);
    //     document.getElementById("result").innerText = 'The grade is: ${grade}';
    // }
}