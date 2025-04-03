function startTest() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("questionSection").style.display = "block";
}

function answerTest(answer) {
    if (answer === 'b') {
        document.getElementById("errorMessage").style.display = "block";
    } else if (answer === 'a') {
        document.getElementById("questionSection").style.display = "none";
        document.getElementById("resultSection").style.display = "block";
    }
}

