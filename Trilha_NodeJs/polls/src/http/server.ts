const app = fastify()
import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll'
import { getPolls } from './routes/get-polls'
import { voteOnPoll } from './routes/vote-on-poll'

app.register(createPoll)
app.register(getPolls)
app.register(voteOnPoll)
app.register(cookie, {
  secret: "polls-app-nlw",
  hook: 'onRequest',
  parseOptions: {}
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})