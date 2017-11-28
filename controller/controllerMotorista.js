//imports
var axios = require('axios'),
    config = require('../config.js'),
    request = require('request');

//[GET]
exports.getAll = (req, res) => {
    console.log(req.params);
    
    request.get({
        uri: config.crudURL+'/',
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        },
        json: true
    }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else{

            if(data.statusCode != 200) res.status(500).send(data.body);
            else {
                
                console.log(data.body);
                res.status(200).send(data.body);

            }

        }
    });
}

exports.getByEmail = (req, res) => {
    console.log(req.params);
    
    request.get({
        uri: config.crudURL+'/'+req.params.email,
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        },
        json: true
    }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else{

            if(data.statusCode != 200) res.status(500).send(data.body);
            else {
                
                console.log(data.body);
                res.status(200).send(data.body);

            }

        }
    });
}

//[POST]
exports.add = (req, res) => {
    console.log(req.body);

    request.post({
        uri: config.crudURL,
        method: 'post',
        json: {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
    }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else {

            if(data.statusCode != 200) res.status(500).send(data.body);
            else {
                
                console.log(data.body);
                res.status(200).send(data.body);

            }

        }
    });
}

//[DELETE]
exports.remove = (req, res) => {
    console.log(req.body);

    request.delete({
        uri: config.crudURL,
        method: 'post',
        json: {
            email: req.body.email,
            senha: req.body.senha
        }
    }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else {

            if(data.statusCode != 200) res.status(500).send(data.body);
            else {
                
                console.log(data.body);
                res.status(200).send(data.body);

            }

        }
    });
}