import { prisma } from "../lib/prisma";


async function Main() {
    await prisma.products.create({
        data: {
            Name: "Chainsaw",
            description: "Mangá Chaisaw",
            img: "https://lh3.googleusercontent.com/pw/AJFCJaXGBbJ-xUyyngm2nKXb2nWgQZJkX-xaOMoPvDehW-u6Qw0xf3n7R8o22D20Q1mz4nTHtewHGlsF5KG_m1Sk-VfYriqC8jEQmhWs7Ki-Xzba_-yjVCoo5fBH5SBD0Kykbk3KaqheSzFy1qbwzvWh-jOg9A=w384-h592-s-no?authuser=0",
            price: 39.90
        }
    })
}

Main()