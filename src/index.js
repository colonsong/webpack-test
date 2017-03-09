/**
 * Created by colon on 2017/3/9.
 */
var messages = require('./messages');

var app = document.getElementById('app');
app.innerHTML = '<p> ' + messages.hi + ' ' + messages.event + '</p>';