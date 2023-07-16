import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { prisma } from '../../../lib/prisma'

export async function RegisterUser(fastify: FastifyInstance) {
    fastify.post('/user', async (response, reply) => {
        const regiserUser = z.object({
            Name: z.string(),
            email: z.string(),
            password: z.string(),
            avatar: z.string()
        })

        const { Name, avatar, email, password } = regiserUser.parse(response.body)

        try {
            await prisma.user.create({
                data: {
                    id: randomUUID(),
                    Name,
                    email,
                    password,
                    avatar,
                    cart: {
                        create: {
                            id: randomUUID()
                        }
                    }
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()

    })
}