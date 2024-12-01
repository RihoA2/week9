const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response)=>{
    
    response.sendFile(__dirname + '/index.html');

});

app.get('/about', (request, response)=>{
    response.send('jojo');

});

app.listen(3000, ()=>{
    console.log('server is running on port 3000.');
});