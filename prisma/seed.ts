import { PrismaClient, Prisma} from '../src/generated/prisma'
const prisma = new PrismaClient()

const userData : Prisma.UserCreateInput[] =[{
    name: "Alica",
    email: "alice@prisma.io",
    posts: {
        create: [
            {title: "join the prisma discord",
            content: "https://pris.ly/discord",
            published: true},
            {title: "join the prisma yt",
            content: "https://pris.ly/youtube"
            },
        ],
    },
}]

export async function main()
{
    for(const u of userData)
    {
        await prisma.user.create({data : u})
    }
}

main();