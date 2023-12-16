import { Prisma, PrismaClient, Rental, User, Bike } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedRentals(users, bikes) {
  if (users.length === 0 || bikes.length === 0) {
    console.log('No users or bikes available for seeding rentals');
    return [];
  }

  const rentals = faker.helpers.multiple(
    () => createRandomRental(users, bikes),
    { count: 100 },
  );
  const createdRentals = [];

  for (const rental of rentals) {
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

  return createdRentals;
}

function createRandomRental(
  users: User[],
  bikes: Bike[],
): Partial<Rental> | null {
  const user = faker.helpers.arrayElement(users);
  const bike = faker.helpers.arrayElement(bikes);

  if (!user || !bike) {
    console.log('Undefined user or bike:', { user, bike });
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
