import { Prisma, PrismaClient, Bike, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedBikes(parks) {
  if (parks.length === 0) {
    console.log('No parks available for seeding bikes');
    return [];
  }

  const bikes = faker.helpers.multiple(() => createRandomBike(parks), {    count: 10,
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
const bikeImages = [
  'https://www.tangerine.ca/fberoot/images/bikeshare-2.png',
  'https://cdn.getyourguide.com/img/tour/5baa02e1947b0.jpeg/145.jpg',
  'https://m.media-amazon.com/images/I/61-Orz6c2pS._AC_UF1000,1000_QL80_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/I/91VnbRKu3nL._AC_UL330_SR330,330_.jpg',
  'https://www.brooklynbicycleco.com/cdn/shop/files/willow-3-speed-31082637623376_grande.jpg',
  'https://www.brooklynbicycleco.com/cdn/shop/files/franklin-8-speed-31082642374736.jpg',
  'https://images.squarespace-cdn.com/content/5ef11a16c151f2464d4a3449/1597441511858-ZABVIMFOXGXMKIAUO87D/Franklin_7_Cardinal_Red_8a9db375-cb6a-48b1-ab54-aaf19b1e150d_2000x.jpg?format=1500w&content-type=image%2Fjpeg',
];
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
    price: faker.number.int({ min: 2, max: 5 }),
    park_id: park.id,
    image: faker.helpers.arrayElement(bikeImages),
  };
}
