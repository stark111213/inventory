import * as dotenv from "dotenv";
import path from "path";

// Force load .env from project root
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import { PrismaClient } from "./src/app/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findMany();
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
