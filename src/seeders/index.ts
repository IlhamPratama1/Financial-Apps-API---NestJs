import { PrismaClient } from '@prisma/client';
import Articles from './data/article.data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  await Promise.all(
    Articles.map(async (article) =>
      prisma.article.upsert({
        where: { title: article.title },
        update: {},
        create: article,
      }),
    ),
  );
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
