/**
 * Created by colon on 2017/3/9.
 */
var messages = require('./messages');

import Button from './button';

console.log(Button);

//var newMessage = () => (`<p>${messages.hi} ${messages.event}</p>`);
var newMessage = () => (Button.button);

var app = document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if(module.hot) {
    module.hot.accept();
}