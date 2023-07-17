import { FastifyInstance } from "fastify";
import { randomUUID } from "node:crypto";
import { extname, resolve } from 'node:path'
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline)

export async function Upload(fastify: FastifyInstance) {
    fastify.post('/upload', async (request, response) => {
        const upload = await request.file()

        if (!upload) {
            return response.status(400).send()
        }

        const mymetypeRegex = /^(image|video)\/[a-zA-Z]+/
        const isValidFileFormat = mymetypeRegex.test(upload.mimetype)

        if (!isValidFileFormat) {
            return response.status(400).send()
        }

        const fileId = randomUUID()
        const extension = extname(upload.filename)

        const fileName = fileId.concat(extension)

        const writeStream = createWriteStream(
            resolve(__dirname, '..', '..', 'uploads', fileName)
        )

        await pump(upload.file, writeStream)

        const fullUrl = request.protocol.concat('://').concat(request.hostname)
        const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

        return { fileUrl }
    })
}