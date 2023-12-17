import { Prisma, PrismaClient, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedParks() {
  const createdParks = [];

  for (let i = 1; i <= 20; i++) {
    const park = createRandomPark(i);
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

function createRandomPark(number: number): Partial<Park> | null {
  const name = `BikeHub Park ${number}`;
  const location = faker.location.streetAddress();

  if (!name || !location) {
    console.log('Undefined name or location:', { name, location });
    return null;
  }

  return {
    name,
    location,
    image: faker.image.city(),
  };
}
