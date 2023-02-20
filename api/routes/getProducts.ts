import { prisma } from "../../lib/prisma";
import {FastifyInstance} from 'fastify'
import { z } from "zod";

export async function GetProducts(fastify: FastifyInstance) {
    fastify.get('/products', async () => {
        const products = await prisma.products.findMany()

        return{products}
    })

    fastify.get('/products/:id', async (request) => {

        const getProductName = z.object({
            Name: z.string()
        })

        const {Name} = getProductName.parse(request.params)

        const products = await prisma.products.findMany({
            where: {
                Name
            },
            select: {
                Name: true,
                price: true,
                description: true,
                img: true
            }
        })

        return {products}
    })
}