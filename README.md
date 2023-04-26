# docker

<h2>Version 1.0</h2>

<h2>What is it?</h2>

this application consist of docker-compose file, that include LTS version Postgresql, Rabbitmq, Redis, and node application, that will try to connect to docker's containers.

<h2>How to run the program?</h2>

You need docker engine and docker compose and node.js. Then you have to use "cd path" in terminal, it is path to repository.

```
cp .env.example .env
sudo docker compose up -d 
cd test_app/
node index.js
```