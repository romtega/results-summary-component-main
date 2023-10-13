"use strict";

const finalScore = document.querySelector("#final-score");
const category1 = document.querySelector("#category-1");
const category2 = document.querySelector("#category-2");
const category3 = document.querySelector("#category-3");
const category4 = document.querySelector("#category-4");
const score1 = document.querySelector("#score-1");
const score2 = document.querySelector("#score-2");
const score3 = document.querySelector("#score-3");
const score4 = document.querySelector("#score-4");
const icon1 = document.querySelector("#svg-1");
const icon2 = document.querySelector("#svg-2");
const icon3 = document.querySelector("#svg-3");
const icon4 = document.querySelector("#svg-4");

function updateData(category, score, icon, data) {
  category.textContent = data.category;
  score.textContent = data.score;

  const iconContainer = document.createElement("img");
  iconContainer.src = data.icon;
  icon.appendChild(iconContainer);
}

fetch("./data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    updateData(category1, score1, icon1, data[0]);
    updateData(category2, score2, icon2, data[1]);
    updateData(category3, score3, icon3, data[2]);
    updateData(category4, score4, icon4, data[3]);

    function score() {
      let sum = data.reduce((acc, data) => acc + data.score, 0);
      return Math.floor(sum / data.length);
    }

    finalScore.textContent = score();
  });
