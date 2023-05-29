import html from "./index.html"
import './index.css';
import Utilities from "./modules/utilities.js";

let utilities = new Utilities();

// utilities.simulateCards(new Array(10).fill(undefined))

utilities.createRealCards(200)


