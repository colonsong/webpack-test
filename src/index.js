/**
 * Created by colon on 2017/3/9.
 */
var messages = require('./messages');

var newMessage = () => (`<p>${messages.hi} ${messages.event}</p>`);

var app = document.getElementById('app');
app.innerHTML = newMessage();

if(module.hot) {
    module.hot.accept();
}