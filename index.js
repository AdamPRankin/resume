const express = require('express');
const  app = express();
http.createServer(app).listen(80);
const path = require('path'	);

const PORT = process.env.PORT || 5000;

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('server is listening on port' + PORT));