import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";

export async function getCart(fastify: FastifyInstance) {
    fastify.get('/car/products', async () => {
        const cart = await prisma.shoppingCart.findMany({
            include: {
                products: {
                    select: {
                        id: true,
                        description: true,
                        img: true,
                        Name: true,
                        price: true
                    }
                }
            }
        })

        return {cart}
    })
}