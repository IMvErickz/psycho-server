import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";

async function Main() {
    await prisma.products.create({
        data: {
            Name: "Teste3",
            description: "Teste3",
            price: 39,
            img: 'src/assets/ImgProducts/Chawsaw.png',
        }
    })
}

Main()