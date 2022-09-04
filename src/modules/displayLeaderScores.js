const leaderScores = document.querySelector('.leader-scores');
const displayLeaderScores = (myData) => {
  leaderScores.innerHTML = '';
  myData.sort((a, b) => a.score - b.score);
  myData.forEach((data) => {
    const listScores = `
    <tr>
      <td>${data.user}</td>
      <td>${data.score}</td>
    </tr>
    `;
    leaderScores.insertAdjacentHTML('beforeend', listScores);
  });
};

export default displayLeaderScores;
