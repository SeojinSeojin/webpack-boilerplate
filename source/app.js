import 'stylesheets/initialize.scss';
import 'stylesheets/app.scss';
import hello from 'scripts/hello.js';
import ExampleDiv from './components/example/index';

new ExampleDiv(document.querySelector('#app'));
hello();
