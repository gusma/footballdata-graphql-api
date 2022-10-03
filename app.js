import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs.js'
import resolvers from './resolvers.js'
import connectDB from './db.js'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
connectDB()

app.get('/', (req, res) => res.send('welcome'))

export default app

async function start () {
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app })

  app.use('*', (req, res) => res.status(404).send('Sorry, resource not found'))

  app.listen(3000, () => {
    console.log('Server on port', 30000)
  })
}

start()
