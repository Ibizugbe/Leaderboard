export const displayLeaderScores = (e) => {
  e.preventDefault();
  const userName = document.querySelector("#user_name");
  const userScore = document.querySelector("#user_score");
  const leaderScores = document.querySelector(".leader-scores");
  const listScores = document.createElement("li");
  const name = document.createElement("span");
  const score = document.createElement("span");
  score.classList.add("scores");
  name.innerHTML = `${userName.value}`;
  score.innerHTML = `${userScore.value}`;
  listScores.appendChild(name);
  listScores.appendChild(score);
  leaderScores.appendChild(listScores);
};
