const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, err => {
    if(err){
        console.log(`Eror from Starting Server ${err}`);
        return;
    }
    console.log(`Example app listening on port ${port}!`);
});