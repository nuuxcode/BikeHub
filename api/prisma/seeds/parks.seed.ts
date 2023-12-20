import { Prisma, PrismaClient, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export async function seedParks() {
  const createdParks = [];

  const moroccanCities = [
    'Casablanca',
    'Rabat',
    'Fes',
    'Marrakech',
    'Tangier',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra',
    'Tetouan',
    'Safi',
    'El Jadida',
    'Taza',
    'Nador',
    'Settat',
    'Khouribga',
    'Beni Mellal',
    'Errachidia',
    'Tiznit',
    'Larache',
    'Ksar El Kebir',
    'Guelmim',
    'Essaouira',
    'Al Hoceima',
    'Lagouira',
    'Tan-Tan',
    'Sidi Ifni',
    'Tata',
    'Dakhla',
  ];

  // Shuffle the moroccanCities array
  const shuffledCities = faker.helpers.shuffle(moroccanCities);

  for (let i = 0; i < shuffledCities.length; i++) {
    const park = createRandomPark(shuffledCities[i]);
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

function createRandomPark(city: string): Partial<Park> | null {
  const name = `${city} Park`;
  const location = faker.address.streetAddress();

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
