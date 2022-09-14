const express = require('express');
const  app = express();
const path = require('path'	);

const PORT = process.env.PORT || 5000;

//set staic folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('server is listening on port' + PORT));