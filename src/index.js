var style = require('./style/globalStyle.css');

var app = document.getElementById('app');
app.innerHTML = `
    <div id="menu">
        <button id="loadPage1">Load Page1</button>
        <button id="loadPage2">Load Page2</button>
    </div>
    <div id="content">
        <h1>Home</h1>
    </div>
`;


document.getElementById('loadPage1').addEventListener('click', ()=> {
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
})

document.getElementById('loadPage2').addEventListener('click', ()=> {
    System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
})


if(DEVELOPMENT) {
    if(module.hot) {
        module.hot.accept();
    }
}
