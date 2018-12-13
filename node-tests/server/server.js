const express = require('express');


let app = express();
app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page Not Found',
        name: 'TODO App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Marina',
        age: 42
    },
    {
        name: 'Jane',
        age: 37
    },
    {
        name: 'Nadia',
        age: 39
    }]);
});

app.listen(3000);
module.exports.app = app;


