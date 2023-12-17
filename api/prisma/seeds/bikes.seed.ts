import { Prisma, PrismaClient, Bike, Park } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const bikeImages = [
  'https://www.tangerine.ca/fberoot/images/bikeshare-2.png',
  'https://cdn.getyourguide.com/img/tour/5baa02e1947b0.jpeg/145.jpg',
  'https://m.media-amazon.com/images/I/61-Orz6c2pS._AC_UF1000,1000_QL80_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/I/91VnbRKu3nL._AC_UL330_SR330,330_.jpg',
  'https://www.brooklynbicycleco.com/cdn/shop/files/willow-3-speed-31082637623376_grande.jpg',
  'https://www.brooklynbicycleco.com/cdn/shop/files/franklin-8-speed-31082642374736.jpg',
  'https://images.squarespace-cdn.com/content/5ef11a16c151f2464d4a3449/1597441511858-ZABVIMFOXGXMKIAUO87D/Franklin_7_Cardinal_Red_8a9db375-cb6a-48b1-ab54-aaf19b1e150d_2000x.jpg?format=1500w&content-type=image%2Fjpeg',
  'https://m.media-amazon.com/images/I/71Ax-KETpdL.jpg',
  'https://www.ecotric.com/cdn/shop/products/NS-LAK26LCD-W_c8306386-0738-4a5b-ab25-14d3040c110b_1200x1200.jpg',
  'https://m.media-amazon.com/images/I/81ZLmH1KN4L.jpg',
  'https://i.pinimg.com/originals/43/43/a5/4343a5eceb56d5c46280e9bfc3218f91.jpg',
  'https://www.sefiles.net/images/library/zoom/reid-ladies-classic-388995-12.jpg',
  'https://i.ebayimg.com/images/g/ctgAAOSwSNhgdfgL/s-l500.jpg',
  'https://www.sefiles.net/images/library/zoom/reid-ladies-classic-lite-7-speed-361040-15.jpg',
  'https://www.sefiles.net/images/library/zoom/reid-ladies-classic-lite-7-speed-361040-13.jpg',
  'https://www.reidcycles.com.au/cdn/shop/products/BV10111REI_LEM_1.jpg?v=1627446780&width=416',
  'https://m.media-amazon.com/images/I/81kXo1lcjSL._AC_UF1000,1000_QL80_.jpg',
  'https://www.womansworld.com/wp-content/uploads/2021/05/bluejay-pink-ebike.png',
  'https://www.biciclasica.com/29309-home_default/capri-berlin-6v-bleu-brun-6v.jpg',
  'https://www.womansworld.com/wp-content/uploads/2022/04/Untitled-design-2022-05-27T142441.973.jpg',
  'https://images.ctfassets.net/ogr4ifihl2yh/2GgIh1SV3biglYu5maE349/5a602151eabbc4e651873de35434a18f/115041--Rosa--Neon_Flowers_with_Pink.png',
  'https://images.ctfassets.net/ogr4ifihl2yh/2Cy9snvkq3IsS84Mln3tUu/e363d2ed714a7efb2e74df8dd5000923/CONTENT---PROFILE-SIZE.png',
  'https://www.evanscycles.com/images/products/91771203_h.jpg',
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1616428196-51kqv9zQbL.jpg',
  'https://images.ctfassets.net/ogr4ifihl2yh/6nMcRK6hnOKVYLaIJrwS06/8fcd7036880b0614fa9b67af8e7a1d4a/EVRYjourney-26__Women-_7sp__Mint_Green_Profile.png'
];

export async function seedBikes(parks) {
  if (parks.length === 0) {
    console.log('No parks available for seeding bikes');
    return [];
  }

  const createdBikes = [];
  let totalBikes = 0;

  for (const park of parks) {
    const shuffledImages = faker.helpers.shuffle(bikeImages);

    for (let i = 0; i < 15; i++) {
      totalBikes++;
      const bike = createRandomBike(park, 'available', totalBikes, shuffledImages[i]);
      const createdBike = await prisma.bike.create({
        data: bike as Prisma.BikeCreateInput,
      });
      createdBikes.push(createdBike);
    }

    for (let i = 0; i < 5; i++) {
      totalBikes++;
      const bike = createRandomBike(park, 'rented', totalBikes, shuffledImages[i + 15]);
      const createdBike = await prisma.bike.create({
        data: bike as Prisma.BikeCreateInput,
      });
      createdBikes.push(createdBike);
    }

    for (let i = 0; i < 5; i++) {
      totalBikes++;
      const bike = createRandomBike(park, 'maintenance', totalBikes, shuffledImages[i + 20]);
      const createdBike = await prisma.bike.create({
        data: bike as Prisma.BikeCreateInput,
      });
      createdBikes.push(createdBike);
    }
  }

  return createdBikes;
}

function createRandomBike(park: Park, status: 'available' | 'rented' | 'maintenance', bikeNumber: number, image: string): Partial<Bike> {
  return {
    model: `Bike-${bikeNumber}-${park.id}`,
    status,
    lock: faker.datatype.boolean(),
    location: faker.location.streetAddress(),
    price: faker.number.int({ min: 2, max: 5 }),
    park_id: park.id,
    image,
  };
}
