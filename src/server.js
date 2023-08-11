require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")//Import banco de dados
const AppError = require("./utils/AppError");
const uploadConfig = require('./configs/upload');

const cors = require('cors');
const express = require("express")// Exporting Express
const routes = require("./routes")// Por padrão ele carregará o arquivo index.js

migrationsRun();//Execute banco de dados

const app = express();// Initialiaze Express
app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use(( error, request, response, next ) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });

});

const PORT = 3333;// Definindo endereço da porta
app.listen(PORT, () => console.log(`Serve is running on Port ${PORT}`));// Com o listen() fazemos o "app" sempre ficar ouvindo(atento) o PORT e seu endereço
