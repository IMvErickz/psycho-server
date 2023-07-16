import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export async function GetUser(fastify: FastifyInstance) {
    fastify.get('/getUser', async () => {
        const getUser = await prisma.user.findMany({
            select: {
                id: true,
                Name: true,
                email: true,
                password: true,
                avatar: true,
                cart: {
                    select: {
                        id: true,
                        Products: {
                            select: {
                                id: true,
                                description: true,
                                img: true,
                                Name: true,
                                price: true
                            }
                        }
                    }
                }
            }
        })

        return { getUser }
    })

    fastify.get('/userLogin', async (response, reply) => {
        const infoUser = z.object({
            Email: z.string()
        })

        const { Email } = infoUser.parse(response.body)

        try {
            await prisma.user.findMany({
                where: {
                    id: Email
                },
                select: {
                    id: true,
                    Name: true,
                    email: true,
                    password: true,
                    avatar: true,
                    cart: {
                        select: {
                            id: true,
                            Products: {
                                select: {
                                    id: true,
                                    description: true,
                                    img: true,
                                    Name: true,
                                    price: true
                                }
                            }
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