var style = require('./style/globalStyle.css');

import {multiply} from './mathStuff';

const newMessage =  () => `
    <div class="${style.box}">
    DEV: ${DEVELOPMENT.toString()} <br>
    PROD: ${PRODUCTION.toString()} <br>
`;

var app = document.getElementById('app');
app.innerHTML = newMessage();

if(DEVELOPMENT) {
    if(module.hot) {
        module.hot.accept();
    }
}
