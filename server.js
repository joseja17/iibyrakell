
require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , path = require('path')
    , app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));
app.get('/*', (req, res) => {
    res.sendFile(
        'index.html', {
            root: path.join(__dirname, 'build')
        }
    )
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});