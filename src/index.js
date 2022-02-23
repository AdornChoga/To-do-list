import './index.css';
import loadTasks from './modules/load.js';
import domEvents from './modules/dom_events.js';

const listContainer = document.querySelector('.dynamic');
loadTasks(listContainer);
domEvents();