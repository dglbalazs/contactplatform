import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const contact = await prisma.contact.create({
    data: {
        name: 'Balazs Toth',
        email: 'contact@balazs-portfolio.website',
        phone: '06 20 000 0000',
        photo: false,
        fav: false,
        muted: false
    }
  })
  console.log({ contact })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })