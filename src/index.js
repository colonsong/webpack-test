/**
 * Created by colon on 2017/3/9.
 */
var messages = require('./messages');

import Button from './button';
import CarImg from './image';

console.log(Button);

var newMessage = () => (`<p>${messages.hi} 
${CarImg}
${messages.event}</p>`);


var app = document.getElementById('app');
app.innerHTML = newMessage();


if(module.hot) {
    module.hot.accept();
}