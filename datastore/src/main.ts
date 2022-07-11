import amqp from 'amqplib';
import mongoose from 'mongoose';

const amqp_uri = process.env.RABBITMQ_URI ?? 'amqp://localhost:5672';
amqp.connect(amqp_uri)
    .then(value => console.log(`Connected to AMQP server ${amqp_uri}`))
    .catch(error => console.error(error));
const database_uri = process.env.DATABASE_URI ?? 'mongodb://localhost:27017';
mongoose.connect(database_uri)
	.then(value => console.log(`Connected to Mongodb server ${database_uri}`))
	.catch(reason => console.error(reason));
