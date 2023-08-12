import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany();
  // console.log("hello", allUsers);

  const postUser = await prisma.user.create({
    data: {
      name: "Alice25",
      email: "alice25@gmail.com",
      age: 10,
    },
  });
  console.log("postUser", postUser);
}

main();
