const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "datadata2X!",
    database: "top_songsDB"
});

connection.connect(err => {
    if (err) throw err;
    console.log(`connected on thread ${connection.threadId}`);
    initialPrompt();
});

function initialPrompt() {
    inquirer.prompt([
        {
            name: "action",
            message: "what do you want to do?",
            type: "list",
            choices: ["ARTIST SEARCH","MULTI SEARCH","RANGE SEARCH","SONG SEARCH","EXIT"]
        }
    ]).then(answer => {
        switch(answer.action) {
            case "ARTIST SEARCH":
                artistSearch();
                break;
            case "MULTI SEARCH":
                multiArtist();
                break;
            case "RANGE SEARCH":
                rangeSearch();
                break;
            case "SONG SEARCH":
                songSearch();
                break;
            default:
                connection.end();
                process.exit();
        }
    });
}

function artistSearch() {
    console.log("search artist...");
    initialPrompt();
}

function multiArtist() {
    console.log("mult search...");
    initialPrompt();
}

function rangeSearch() {
    console.log("range search...");
    initialPrompt();
}

function songSearch() {
    console.log("song search...");
    initialPrompt();
}