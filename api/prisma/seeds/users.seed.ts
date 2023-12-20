import { Prisma, PrismaClient, User } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedUsers() {
  const users = faker.helpers.multiple(createRandomUser, { count: 15 });  const createdUsers = [];

  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user as Prisma.UserCreateInput,
    });
    createdUsers.push(createdUser);
    console.log(`Created user with ID: ${createdUser.id}`);
  }

  return createdUsers;
}

function createRandomUser(): Partial<User> {
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.past(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
  };
}
