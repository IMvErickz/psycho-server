import {FastifyInstance} from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { prisma } from '../../lib/prisma'

export async function RegisterUser(fastify: FastifyInstance) {
    fastify.post('/registerUser', async (response, reply) => {
        const regiserUser = z.object({
            Name: z.string(),
            LastName: z.string(),
            Email: z.string(),
            password: z.string(),
        })

        const { Name, LastName, Email, password } = regiserUser.parse(response.body)
        
        try {
            await prisma.userRegister.create({
                data: {
                    id: randomUUID(),
                    Name,
                    LastName,
                    Email,
                    password
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()
        
    })
}