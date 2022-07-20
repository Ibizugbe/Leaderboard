// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import "./style.css";
import { displayLeaderScores } from "./modules/addScore";

const submitBtn = document.querySelector("#submit");
displayLeaderScores;
submitBtn.addEventListener("click", displayLeaderScores);
