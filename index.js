const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'))


app.listen(port, err => {
    if(err){
        console.log(`Eror from Starting Server ${err}`);
        return;
    }
    console.log(`Example app listening on port ${port}!`);
});