import { prisma } from "../lib/prisma";

async function Main() {
    await prisma.products.create({
        data: {
            Name: "Chawsaw",
            description: "Chawsaw",
            price: 39,
            img: 'src/assets/ImgProducts/Chawsaw.png',
        }
    })
}

Main()