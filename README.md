[![Build Status](https://travis-ci.org/inverted-murmuration/project.svg)](https://travis-ci.org/inverted-murmuration/project)

# myBus

MyBus is a mobile application which uses the user's location to display the nearest public transit stations and live 
arrival times for buses and trains at each station. 

## Team

  - __Product Owner__: Sat Khalsa
  - __Scrum Master__: Michael Borglin
  - __Development Team Members__: Terry Chan, Justin Fong

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Getting Started

### Install Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
npm install -g gulp
```

### Transit Data Api

For our transit data, we are relying on the nextbus api. Since nextbus only publishes this data as an XML feed, we are
using the [restbus library]((http://restbus.info/)) (a rest abstraction over the nextbus xml feed). Feel free to [fork
our api]() server or roll your own using the [restbus library](http://restbus.info/). 

### Server for authentication and other services (optional)

We've also set up a node server with a postgres database to use for user authentication and any other services you'd 
like to add in the future. Feel free to [fork it](). We used the sequelize ORM to interact with our postgres database.
To easily install postgres on your local machine, take a look at the [Postgres App](http://postgresapp.com/).

## Deployment & Continuous Integration

### Set up deployment environment

### Set up continuous integration

## Testing

We've installed a number of testing suites for you to use as you wish. These include:

### Unit tests - Jasmine / Karma 

The unit test spec files can be found at www/spec/unit. To run these tests (as well as jshint), run the following in
your terminal window.

```
npm test
```

### e2e tests - Protractor

The end-to-end test spec files can be found at www/spec/e2e. To run these tests, run the following the the terminal.

```
gulp protractor
```

## Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Stack

We used the following tools and technologies in this project

1. Ionic
1. Angular
1. Node.js
1. Express
1. Postgres
1. Sequelize
1. Bower
1. Gulp
1. Jasmine
1. Karma
1. Protractor
1. Travis CI

