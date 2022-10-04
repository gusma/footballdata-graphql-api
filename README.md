# ⚽ Football-Data NodeJS API with GraphQL PoC

## Description

This project is a PoC of a GraphQL API built with NodeJS, GraphQL, Express, MongoDB, Mongoose and other related technologies.

The proof of the DoD was to build a fully functional GraphQL API, that can not also store and display and update and create information as a CRUD API, but also to create a main mutation in ramification that can import leagues by leagueCode, teams, players and coaches alike from those same leagues. 

## Models

The query-able information on this API revolves around four main Schemas/Models, those be:

* Leagues, first and foremost,
* Teams, with their own information,
* Players, belonging to those teams,
* and Head Coaches / Managers. Only coaches in those cases where players are not present.

### How to install

First and foremost, please create a new database either that be in your local instance or on the MongoDB Atlas Cloud and retrieve your connection thread. 

After that, please copy `.env.example` to `.env` and fill in with both your environment variables: the connection path to your database, as well as the API token you obtain in football-data.org by signing up.

Once this has been done, proceed to the base folder on your project, run 

`npm install` 

and subsequently, run 

`npm run dev` 

to get your project started. 

### Main Mutation

The main mutation used by this is the *importLeague* mutation. This mutation, by entering a leagueCode, permits us to import the information for a whole league, by the competition itself, its teams, and alternatively its players and coaches (if available), or just coaches. To run such a query, you need to access your [GraphQL Sandbox instance](https://studio.apollographql.com/sandbox/explorer), connect to your local instance at ```http://localhost:3000/graphql``` and then run a mutation such as this:

```gql
mutation {
  importLeague(
    league: {
      leagueCode: "PL"
    }
  ) { leagueCode }
}
```

This example fetches all information for the Premier League. For another competition such as the Fifa World Cup 2022 you need to run a mutation such as:

```gql
mutation {
  importLeague(
    league: {
      leagueCode: "WC"
    }
  ) { leagueCode }
}
```

### Queries

A variety of queries can be run also to consult for information, such as querying for information on all leagues available:

```gql
query {
  getAllLeagues {
    leagueAreaName
    leagueCode
    leagueName
  } 
}
```

Or perhaps, to consult all available players:

```gql
query {
  getAllPlayers {
    playerName
    playerNationality
    playerDateOfBirth
    playerPosition
    playerTeam
  } 
}
```

### Other mutations

Other mutations have been included such as ones to create, update or delete players, teams, coaches and leagues. I won't get into it too much for briefness, but here's one example on how to create a league from scratch (for you to get an idea):

```gql
mutation {
  createLeague (
    league: {
    leagueCode: "PL",
    leagueName: "Polish Premier League",
    leagueAreaName: "Ballsovia"
    }
  ) { leagueCode, leagueName, leagueAreaName }
}
```

#### Caveats 

There's currently a variety of leagues one can query. However, on the free tier we currently have to the Football-Data API we have a few leagues we can query for full information (and on different levels). Those are:


| League Code | Competition                     |
| ----------- | ------------------------------- |
| WC          | FIFA World Cup                  |
| CL          | UEFA Champions League           |
| BL1         | Bundesliga                      |
| DED         | Eredivisie                      |
| BSA         | Campeonato Brasileiro Série A   |
| PD          | Primera Division                |
| FL1         | Ligue 1                         |
| ELC         | Championship                    |
| PPL         | Primeira Liga                   |
| EC          | European Championship           |
| SA          | Serie A                         |
| PL          | Premier League                  |
| CLI         | Copa Libertadores               |

### Technologies used

Some of the technologies used in this project were:

* Node.js
* Express
* GraphQL, through 'apollo-server-express'
* Nodemon
* node-fetch
* MongoDB and Mongoose
* ESLint & Prettier

<hr />

🚀  Built by [Gustavo Malamud](https://www.gustavomalamud.com) in October 2022. 