const sqlite3 = require("sqlite3"); // Este é o drive, a versão que vai estabelecer a comunicação com a base de dados
const sqlite = require("sqlite"); // Este é responsável por conectar
const path = require("path");

async function sqliteConnection(){
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database
}

module.exports = sqliteConnection;