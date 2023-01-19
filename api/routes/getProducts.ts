import { prisma } from "../../lib/prisma";
import {FastifyInstance} from 'fastify'

export async function GetProducts(fastify: FastifyInstance) {
    fastify.get('/products', async () => {
        const products = await prisma.products.findMany()

        return{products}
    })
}