import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function GetUser(fastify: FastifyInstance) {
    fastify.get('/getUser', async () => {
        const getUser = await prisma.userRegister.findMany()

        return {getUser}
    })

    fastify.get('/userLogin', async (response, reply) => {
        const infoUser = z.object({
            Email: z.string()
        })

        const { Email } = infoUser.parse(response.body)
        
        try {
            await prisma.userRegister.findUnique({
                where: {
                    id: Email
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()
    })
}