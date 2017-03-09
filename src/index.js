import {multiply} from './mathStuff';

const newMessage =  () => `
    DEV: ${DEVELOPMENT.toString()} <br>
    PROD: ${PRODUCTION.toString()} <br>
`;

var app = document.getElementById('app');
app.innerHTML = newMessage();


if(module.hot) {
    module.hot.accept();
}