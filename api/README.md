## Running the App

```bash
# 1. Sets up the environment variables for the app:
cp .env.example .env

# 2. Install dependencies:
yarn install

# 3. Navigate to the `api` directory:
cd api/

# 4. Start the PostgreSQL database service:
docker-compose up

# 5. Apply database migrations:
npx prisma migrate dev

# 6. Generate Prisma Client:
npx prisma generate

# 7. Seed the database (populate the database with dummy data):
yarn prisma:seed

# 8. (Optional) Open Prisma Studio to visualize and manipulate data:
npx prisma studio

# 9. Start the application:
yarn start

# 10. Open Swagger API documentation:
Navigate to http://localhost:3300/api/v1/
```
