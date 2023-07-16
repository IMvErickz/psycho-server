import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";


async function Main() {
    await prisma.user.create({
        data: {
            email: 'erickspy2003@gmail.com',
            password: 'erickpsy10',
            Name: "Erick Santos",
            id: randomUUID(),
            avatar: "https://i.ytimg.com/vi/yJnhtMvU6ao/sddefault.jpg",
            cart: {
                create: {
                    id: randomUUID()
                }
            }
        }
    })
}

Main()