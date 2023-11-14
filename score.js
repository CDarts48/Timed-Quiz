window.onload = function () {
    var highScores = JSON.stringify(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("score");
var initials = document.getElementById("initials");
    highScoresList.innerHTML = "";
    highScores.push(scoreObject);
    localStorage.setItem("highScores", JSON.stringify(score));

    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 5);

    highScores.forEach(function (scoreObject) {
        var listItem = document.createElement("li");
        listItem.textContent = scoreObject.initials + ": " + scoreObject.score;
        highScoresList.appendChild(listItem);
    });

    var tryAgainButton = document.getElementById("restart");
     {
        window.location.href = "index.html";
    });
};