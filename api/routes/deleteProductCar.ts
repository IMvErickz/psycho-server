import { prisma } from "../../lib/prisma"; 
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function DeleteProductCar(fastify: FastifyInstance) {
    fastify.post('/deleteCar/:id', async (request, reply) => {
        const cart = z.object({
            id: z.string(),
        })

        const product = z.object({
            idProduct: z.string()
        })

        const { id } = cart.parse(request.params)
        const {idProduct} = product.parse(request.body)
        
        await prisma.cart.update({
            where: {
                id
            },
            data: {
                products: {
                    disconnect: {
                        id: idProduct
                    }
                }
            }
        })

        return reply.status(201).send()
    })
}