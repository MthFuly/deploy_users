const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const req = require('express/lib/request');
const { response } = require('express');
const port = process.env.PORT || 21262

// Configurando o servidor
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

let db = [{
    "result": {
      "success": {
        "email": "email@email",
        "id": "id12345"
      }
    }
  }]

  let dberror = [{
    "result": {
      "error": {
        "message": "necessário enviar body"
      }
    }
  }]

  // Buscar dados
  app.get('/users/serviceNow', (req, res) =>{
    return res.json(db);
  });

  // Inserir dados
  app.post('/users/serviceNow', (req, res) =>{
    const body = req.body;
    if(!body.users){
         return res.json(dberror);
    }
    else{
        return res.json(db);
    }
  });


app.listen(port, () =>{
    console.log('Servidor está rodando ');
})