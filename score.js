window.onload = function () {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("scoreList");
    highScoresList.innerHTML = "";

    highScores = highScores.sort((a, b) => b.score - a.score);
    for (var i = 0; i < 5; i++) {
    var listItem = document.createElement("li");
        listItem.textContent = highScores[i].initials + ": " + highScores[i].score;
        highScoresList.appendChild(listItem);
        }
    var tryAgainButton = document.getElementById("restart");
     tryAgainButton.addEventListener("click", function (){
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