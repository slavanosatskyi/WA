import './homework_12.scss';
import { Clock } from './scripts/clock';

const clock = new Clock(document.querySelector('#clock'));
clock.render();
clock.startUpdate();