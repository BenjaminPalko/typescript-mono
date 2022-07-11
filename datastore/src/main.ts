import {connect} from 'amqplib';

const amqp_uri = process.env.RABBITMQ_URI ?? 'amqp://localhost:5672';
connect(amqp_uri)
    .then(value => console.log(`Connected to AMQP server ${amqp_uri}`))
    .catch(error => console.error(error));
