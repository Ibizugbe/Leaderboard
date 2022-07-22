const leaderScores = document.querySelector('.leader-scores');
const displayLeaderScores = (myData) => {
  leaderScores.innerHTML = '';
  myData.sort((a, b) => a.score - b.score);
  myData.forEach((data) => {
    const listScores = `<li class="score-li">${data.user}: ${data.score}</li>`;
    leaderScores.insertAdjacentHTML('beforeend', listScores);
  });
};

export default displayLeaderScores;
