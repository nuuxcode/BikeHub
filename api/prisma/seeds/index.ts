import { seedUsers } from './users.seed';
import { seedBikes } from './bikes.seed';
import { seedParks } from './parks.seed';
import { seedRentals } from './rentals.seed';

async function main() {
  const parks = await seedParks();
  const bikes = await seedBikes(parks);
  const users = await seedUsers();
  await seedRentals(users, bikes);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // Disconnect Prisma Client
  });
