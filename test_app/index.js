const { Pool, Client } = require('pg');
const redis = require('redis');
const amqp = require('amqplib/callback_api');
const dotenv = require('dotenv').config({ path: '../.env' });

const clientRedis = redis.createClient({
    socket: {
        host: process.env.all_host,
        port: process.env.redis_port.split(':')[0]
    }
});


clientRedis.on('ready', () => {
    console.log("redis Connected!");
});
 clientRedis.connect();

const clientPostgres = new Client({
    user: process.env.postgres_user,
    host: process.env.all_host,
    database: process.env.postgres_db,
    password: process.env.postgres_pwd,
    port: process.env.postgres_port.split(':')[0]
  });

 clientPostgres.connect();

amqp.connect(`amqp://${process.env.amqp_user}:${process.env.amqp_pwd}@${process.env.all_host}:${process.env.amqp_port.split(':')[0]}`, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  console.log("rabbitmq connected");
  connection.close();
});