const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes'));

// app set view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, err => {
    if(err){
        console.log(`Eror from Starting Server ${err}`);
        return;
    }
    console.log(`Example app listening on port ${port}!`);
});