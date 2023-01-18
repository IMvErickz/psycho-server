import { randomUUID } from "crypto";
import {FastifyInstance} from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function RegisterProduct(fastify: FastifyInstance) {
    fastify.post('/newProduct', async (response, reply) => {
        const newProduct = z.object({
            Name: z.string(),
            description: z.string(),
            price: z.number(),
            img: z.string(),
        })

        const { Name, description, img, price } = newProduct.parse(response.body)
        
        try {
            await prisma.products.create({
                data: {
                    id: randomUUID(),
                    Name,
                    description,
                    price,
                    img
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()
    })
    
}