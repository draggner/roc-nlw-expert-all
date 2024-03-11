import { FastifyInstance } from 'fastify'
import { z } from 'zod'


export async pollResults(app: FastifyInstance){
  app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
    connection.socket.on('message', (messege: string) => {
      connection.socket.send('you send ' + messege)
    })
    const { pollId } = getPollParams.parse(request.params)

    voting.subscribe(pollId, (message) => {
      connection.socket.send(JSON.stringify(message))
    })
  })
}
