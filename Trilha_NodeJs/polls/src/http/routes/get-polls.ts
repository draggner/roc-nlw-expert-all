import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../../lib/prisma";
import { realpathSync } from "fs";


export async function getPolls(app: FastifyInstance) {
  app.get('/polls/:pollId', async (request, reply) => {
    const getPollParams = z.object({
      pollId: z.string().uuid(),
    })
    const { pollId } = getPollParams.parse(request.params)
    const poll = await prisma.poll.findUnique({
      shere: {
        id: pollId,
      },
      include: {
        options: {
          select: {
            id: true,
            title: true,
          }
        }
      }
    })
    return reply.send({ poll })
  })
}