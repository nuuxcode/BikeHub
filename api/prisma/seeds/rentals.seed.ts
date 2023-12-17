import { Prisma, PrismaClient, Rental, User, Bike } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedRentals(users, bikes) {
  if (users.length === 0 || bikes.length === 0) {
    console.log('No users or bikes available for seeding rentals');
    return [];
  }

  const createdRentals = [];

  for (const user of users) {
    if (user.id === 1) {
      continue;
    }

    for (let i = 0; i < 10; i++) {
      const rental = createRandomRental(user, bikes);
      if (!rental) {
        console.log('Skipping undefined rental');
        continue;
      }
      const createdRental = await prisma.rental.create({
        data: rental as Prisma.RentalCreateInput,
      });
      createdRentals.push(createdRental);
      console.log(`Created rental with ID: ${createdRental.id}`);
    }
  }

  return createdRentals;
}

function createRandomRental(
  user: User,
  bikes: Bike[],
): Partial<Rental> | null {
  const bike = faker.helpers.arrayElement(bikes);

  if (!bike) {
    console.log('Undefined bike:', { bike });
    return null;
  }

  return {
    user_id: user.id,
    bike_id: bike.id,
    start_time: faker.date.past(),
    end_time: faker.date.future(),
    status: faker.helpers.arrayElement(['ongoing', 'completed', 'lost']),
    price: faker.number.int({ min: 5, max: 500 }),
  };
}
