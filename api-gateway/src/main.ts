import {connect, Connection} from 'amqplib';
import express, {Router} from 'express';
import {logRequest} from "./middleware/logRequest";

const amqp_uri = process.env.RABBITMQ_URI ?? 'amqp://localhost:5672';
let amqpConnection: Connection;
connect(amqp_uri)
    .then(connection => {
        console.log(`Connected to AMQP server ${amqp_uri}`);
        amqpConnection = connection;
    })
    .catch(error => console.error(error));

const server = express();
const v1Routes = Router();

server.use(logRequest);
server.use('/api/v1', v1Routes);

amqpConnection.
