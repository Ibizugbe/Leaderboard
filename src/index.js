// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import displayLeaderScores from './modules/addScore.js';

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', displayLeaderScores);
