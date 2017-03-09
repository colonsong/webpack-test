import {multiply} from './mathStuff';

const newMessage =  () => (multiply(3,3));

var app = document.getElementById('app');
app.innerHTML = newMessage();


if(module.hot) {
    module.hot.accept();
}