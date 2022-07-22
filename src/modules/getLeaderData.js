import displayLeaderScores from './displayLeaderScores';

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TbdiYbfHzwwkCxXBqVhv/scores/';
  const response = await fetch(url);
  const myData = await response.json();
  const myArray = myData.result;
  displayLeaderScores(myArray);
};

export default getData;