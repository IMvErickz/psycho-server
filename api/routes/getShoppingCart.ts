import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getCart(fastify: FastifyInstance) {
    fastify.get('/car', async () => {
        const cart = await prisma.cart.findMany({
            include: {
                products: {
                    select: {
                        id: true,
                        Name: true,
                        description: true,
                        price: true,
                        img: true
                    }
                }
            }
        })

        return {cart}
    })
}