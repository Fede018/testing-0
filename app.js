const express = require('express')

const path = require('path')

const app = express();

app.listen(3030, () => console.log('Inicialización con exito'));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})




