# JWT-Auth

## Stack used:

###

Javascript, MongoDB , NodeJS, Express, Mongoose, Hapi/Joi, JWT, Bcrypt ,dotenv

## About:

###

Aim was to build authorization and authentication system using JSON web tokens.

HOW IT WORKS?

<ul>
    <li>
        <p>Setting up connection with db and use mongoose to create User model </p>
    </li>
    <li>
        <p>Setting up routes for register and login </p>
    </li>
    <li>
        <p>Setting up registerValidation and loginValidation functions in validation.js</p>
    </li>
    <li>
        <p>Hashing password using bcrypt</p>
    </li>
    <li>
        <p> Setting up verify function in verifyToken.js</p>
    </li>

</ul>

HOW TO USE :

1. Download the repo.
2. Write in the console npm start to load dependencies.
3. Make sure to change enviornment variables like URL to connect to the DB.
4. Type in console: nodemon to start server.
4. Make frontend or use Postman to check the connenction.
5. Enjoy! :)
