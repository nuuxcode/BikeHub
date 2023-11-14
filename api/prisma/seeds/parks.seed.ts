import { Prisma, PrismaClient, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedParks() {
  const parks = faker.helpers.multiple(createRandomPark, { count: 10 });
  const createdParks = [];

  for (const park of parks) {
    if (!park) {
      console.log('Skipping undefined park');
      continue;
    }
    const createdPark = await prisma.park.create({
      data: park as Prisma.ParkCreateInput,
    });
    createdParks.push(createdPark);
    console.log(`Created park with ID: ${createdPark.id}`);
  }

  return createdParks;
}

function createRandomPark(): Partial<Park> | null {
  const name = `Park ${faker.number.int({ min: 1, max: 10 })}`;
  const location = faker.location.streetAddress();

  if (!name || !location) {
    console.log('Undefined name or location:', { name, location });
    return null;
  }

  return {
    name,
    location,
  };
}
