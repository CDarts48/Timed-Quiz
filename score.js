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

//  check out using this 4loop to creat teh high scores for (var i = 0; i < data.length; i++) {
//         var userName = document.createElement("h3");
//         var userUrl = document.createElement("a");
//         userName.textContent = data[i].login;
//         userUrl.textContent = data[i].url;
//         userContainer.append(userName);
//         userContainer.append(userUrl);
//       }
//     });