
require('dotenv').config();

var api_key = process.env.MAIL_GUN_API;
var domain = process.env.MAIL_GUN_DOMAIN;

const express = require('express')
    , bodyParser = require('body-parser')
    , path = require('path')
    , app = express()
    , axios = require('axios')
    , mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


app.post('/api/contact-me', (req, res) => {
    //If the select Customer Service, their info is sent as a email to customerservice@alder.com

    var data = {
        from: 'Customer Service Request <joseja_17@hotmail.com>',
        to: 'joseja_17@hotmail.com',
        subject: 'IIBYRAKELL Website',
        text: `Name: ${req.body.firstName}  ${req.body.lastName}    
                    
                    Email: ${req.body.email}    
                    
                    Phone: ${req.body.phone}   
                      
                    Message: ${req.body.message}`
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        res.status(200).send('Funcionando');
    });


    // console.log(data)
})

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