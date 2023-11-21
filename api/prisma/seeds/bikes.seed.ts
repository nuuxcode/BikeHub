import { Prisma, PrismaClient, Bike, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedBikes(parks) {
  if (parks.length === 0) {
    console.log('No parks available for seeding bikes');
    return [];
  }

  const bikes = faker.helpers.multiple(() => createRandomBike(parks), {
    count: 50,
  });
  const createdBikes = [];

  for (const bike of bikes) {
    if (bike.park_id === undefined) {
      console.log('Undefined park_id for bike:', bike);
      continue;
    }
    const createdBike = await prisma.bike.create({
      data: bike as Prisma.BikeCreateInput,
    });
    createdBikes.push(createdBike);
    console.log(`Created bike with ID: ${createdBike.id}`);
  }

  return createdBikes;
}

function createRandomBike(parks: Park[]): Partial<Bike> {
  const park = faker.helpers.arrayElement(parks);

  if (!park) {
    console.log('Undefined park:', { park });
    return null;
  }

  return {
    model: `Bike ${faker.number.int({ min: 1, max: 50 })}`,
    status: faker.helpers.arrayElement(['available', 'rented', 'maintenance']),
    lock: faker.datatype.boolean(),
    location: faker.location.streetAddress(),
    price_tier: faker.helpers.arrayElement(['A', 'B', 'C']),
    park_id: park.id,
  };
}
