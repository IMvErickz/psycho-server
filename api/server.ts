import Fastify from "fastify";
import Cors from '@fastify/cors'

import {RegisterUser} from './routes/registerUser'
import { RegisterProduct } from "./routes/registerProduct";
import { GetProducts } from "./routes/getProducts";
import { GetUser } from "./routes/getUser";
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

    await fastify.register(RegisterUser)
    await fastify.register(RegisterProduct)
    await fastify.register(GetProducts)
    await fastify.register(GetUser)

     await fastify.listen({ port: 3838 })
}

start()