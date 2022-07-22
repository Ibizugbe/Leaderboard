// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import getData from './modules/getLeaderData';
import submitScore from './modules/addLeaderScores';
getData()
const submitBtn = document.querySelector('#submit');
const refreshBtn = document.querySelector('.refresh');
submitBtn.addEventListener('click', submitScore);
refreshBtn.addEventListener('click', getData);

  