console.log(`Show message`);

const prompt = require('prompt-sync')();

const usersDatabase = [
    {
        Id: 1,
        username: "user1",
        password: "pasword1"
    },
    {
        Id: 2,
        username: "user2",
        password: "password2"
    },
    {
        Id: 3,
        username: "user3",
        password: "password3"
    },
    {
        Id: 4,
        username: "username4",
        password: "password4"
    },
    {
        Id: 5,
        username: "username5",
        password: "password"
    }
];


const username = prompt("Cual es el nombre de usuario?");
const password = prompt("Cual es el password ?");

function existUserInDatabase(username, password) {
    for(let i=0; i>usersDatabase-length; i++){
        if(usersDatabase[i].username === username && usersDatabase[i].password === password){
            console.log("Informacion correcta de user ID: ", usersDatabase[i].Id);
            return true;
        }
    }
    return false;
}

existUserInDatabase(username, password);