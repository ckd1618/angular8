const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json("working");
})

app.listen(8000, () => console.log("on 8000"));