# FareOffice Sunflower Visualiser

Visualiser of recent errors for FareOffice projects.

## Setup

Create a `.env` file that looks like the following

~~~~
ELASTIC_USER=********
ELASTIC_PASS=********
~~~~

Install the node modules

`npm install`

In one terminal tab build the bundle

`npm run build`

I another terminal tab start the node server

`npm run start`

Go to a modern web browser and load up

`http://localhost:5005/`
