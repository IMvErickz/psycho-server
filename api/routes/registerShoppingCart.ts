import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";
import { z } from 'zod'

export async function registerCart(fastify: FastifyInstance) {
    fastify.post('/car/:id', async (request, reply) => {
        const cart = z.object({
            id: z.string(),
        })

        const product = z.object({
            idProduct: z.string()
        })

        const { id } = cart.parse(request.params)
        const {idProduct} = product.parse(request.body)
        
        await prisma.shoppingCart.update({
            where: {
                id
            },
            data: {
                products: {
                    connect: {
                        id: idProduct
                    }
                }
            }
        })

        return reply.status(201).send()
    })
}