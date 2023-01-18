import Fastify from "fastify";
import Cors from '@fastify/cors'

// import {RegisterUser} from './routes/registerUser'
// import { RegisterProduct } from "./routes/registerProduct";
// import { GetProducts } from "./routes/getProducts";
// import { GetUser } from "./routes/getUser";
import { z } from "zod";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";

async function start() {
    const fastify = Fastify({
        logger: true,
        
    })

    await fastify.register(Cors, {
        origin: true,
    })

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

    fastify.get('/products', async () => {
        const products = await prisma.products.findMany()

        return{products}
    })

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

    // await fastify.register(RegisterUser)
    // await fastify.register(RegisterProduct)
    // await fastify.register(GetProducts)
    // await fastify.register(GetUser)

     await fastify.listen({ port: 3838 })
}

start()