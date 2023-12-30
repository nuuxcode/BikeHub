# BikeHub: Bike Rental Website
# Your Journey, Your Bike, Your Freedom with BikeHub
## Demo https://bikehub.me/

<a href="https://www.youtube.com/watch?v=TNgv1815Mpk" target="blank">
<p align="center">Watch Video Website Demo</p>
<p align="center">
<img width="70%" src="https://github.com/nuuxcode/BikeHub/assets/24565896/82b77f18-780d-400c-9d3e-72e90bdf39a4" alt="nuuxcode" /></p>
</a>

## Presentation

<a href="https://www.youtube.com/watch?v=K0fPMFc8jn4" target="blank">
<p align="center">Watch Portfolio Project Presentation Video</p>
<p align="center">
<img width="70%" src="https://github.com/nuuxcode/BikeHub/assets/24565896/7de8fb45-ab2b-4b02-9ddb-bd8d646f00db" alt="nuuxcode" /></p>
</a>

# Welcome

![image](https://github.com/nuuxcode/BikeHub/assets/24565896/a334c148-f8dd-4bb3-b584-dec5534f3967)

Welcome to BikeHub, your premier bike rental platform designed for enthusiasts, commuters, and tourists seeking the ultimate cycling experience. Whether you're embarking on an adventure, commuting to work, or exploring a new city, BikeHub is here to elevate your journey.

## About BikeHub

BikeHub offers a seamless and user-friendly platform that allows you to rent the perfect bike for your needs. This README serves as your guide, offering insights into our talented team, cutting-edge technologies, API endpoints, and how you can contribute to making BikeHub even better.

## Discover the Essence of BikeHub

- **Enthusiast-Focused:** Tailored for bike enthusiasts who appreciate quality and diversity in their rides.

- **Commute with Ease:** Ideal for daily commuters, providing a reliable and convenient solution for urban transportation.

- **Tourist-Friendly:** Explore new cities on two wheels, unlocking the freedom to discover hidden gems at your own pace.

## Unveiling the Project

Dive into the heart of BikeHub by exploring our team, the technologies powering our platform, key API endpoints, and guidelines for contributing. Your journey begins here, with BikeHub as your trusted companion.



# Team and Roles

## [ITRI M'BARKI](https://www.linkedin.com/in/itri-m-barki-038704232/) (Full-Stack Developer)
**Role:** Full-Stack Developer focus on BACKEND

**Contribution:**
- Setup of the initial project files, laying the foundation for development.
- Backend development using Nest.js, Prisma, and PostgreSQL.
- Implementation of API functionalities, including authentication.
- Creation of data models and database architecture.
- Design and creation of the admin panel with CRUD functionality.
- Implementation of charts and statistics for data visualization.
- Full-stack development covering both frontend and backend aspects.

## [El Gharbi Ayoub](https://www.linkedin.com/in/elgharbiayoub/) (Full-Stack Developer)
**Role:** Full-Stack Developer focus on FRONTEND

**Contribution:**
- Design and creation of an engaging landing page.
- Development of the user profile and dashboard, prioritizing user experience.
- Implementation of profile settings for enhanced user customization.
- Utilized React.js with Chakra-UI for the frontend.
- Contributed to the overall design and visual appeal of the platform.
- Collaborative work in creating a cohesive and integrated system.
- Responsible for the UI/UX design, ensuring an optimal user experience.
- Created the logo, selected colors, and designed all pages.
- Contributed to the API and backend design.
- Contributed to the data model and database architecture.

## [Mounssif nuuX BOUHLAOUI](https://www.linkedin.com/in/mounssif-bouhlaoui-25934570/) (DevOps/Full-Stack Developer)
**Role:** DevOps/Full-Stack Developer focus on DEVOPS

**Contribution:**
- Repository management.
- Setup and configuration of dev/prod servers using PM2/NGINX.
- Implementation of CI/CD using GitHub Actions.
- Domain/SSL setup and management.
- Integration of PayPal as payment processing.
- Implementation of Google authentication for login and registration.
- Implementation of Email notification features.
- Creation and design of the booking and payment process.
- Implementation of QR code generation for rentals.
- Development of various API endpoints.
- Data model updates.

# Technologies

## Front-End
- **React.js**: A JavaScript library for building user interfaces.
- **Chakra-UI**: A simple, modular, and accessible component library for React.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Swiper**: A modern touch slider used for creating interactive and responsive carousels.
- **Vite.js with TypeScript**: A fast, opinionated frontend build tool.
- **React-QR-CODE**: Library for generating QR codes in React applications.
  
## Back-End
- **Nest.js with TypeScript**: A powerful and scalable Node.js framework for building server-side applications.
- **Prisma**: A modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: An open-source relational database management system.
- **Swagger**: A tool for designing, building, documenting, and consuming RESTful web services.
- **Nodemailer**: A module for Node.js applications to send emails.
- **JWT & Passport**: Libraries for authentication and authorization in Node.js applications.
- **Google OAuth**: Integration for authentication using Google accounts.
- **PayPal API**: A payment gateway for online transactions.

## DevOps
- **PM2**: A process manager for Node.js applications.
- **DATADOG**: Monitoring and analytics platform for comprehensive observability.
- **2 Servers (prod and dev)**: Deployed on Google Cloud and DigitalOcean.
- **CI/CD with GitHub Actions**: Automated workflows for continuous integration and continuous deployment.

## Monitoring
- **Google Cloud Monitoring**: Monitoring solutions for applications hosted on Google Cloud.
- **DigitalOcean Monitoring**: Monitoring tools for applications hosted on DigitalOcean.
- **PM2 MONITOR**: Monitoring capabilities provided by PM2.
- **DATADOG**: Centralized monitoring and analytics for applications.

## Version Control and Collaboration
- **GIT**: Distributed version control system.
- **GITHUB**: Web-based platform for version control and collaboration.

## Server and Domain
- **LINUX**: Operating system.
- **NGINX**: Web server and reverse proxy server.
- **GitHub Actions**: Automated workflows for CI/CD.

## Cloud Services
- **Google Cloud**: Cloud computing services for hosting applications.
- **DigitalOcean**: Cloud infrastructure provider.
- **Namecheap**: Domain registration and management.

This technology stack combines powerful frameworks, libraries, and services to build a robust and scalable application,
integrating seamlessly from front-end to back-end and ensuring efficient deployment and monitoring.

## Installation (still on going)

Follow these steps to set up BikeHub locally on your machine:

1. **Clone the Repository:**
   - Open your terminal and run:
     ```bash
     git clone https://github.com/nuuxcode/BikeHub.git ~/BikeHub/
     ```

2. **Install Dependencies:**
   - Navigate to the project directory:
     ```bash
     cd ~/BikeHub/ && npm install && yarn install
     ```

3. **Build Frontend:**
   - Move to the frontend directory and start the build process:
     ```bash
     cd ~/BikeHub/frontend && npm run build
     ```

4. **Serve Frontend:**
   - Use a server to serve the frontend on port 3000:
     ```bash
     serve -l 3000 -s ~/BikeHub/frontend/dist
     ```

5. **Configure API Environment:**
   - Update the API configuration by copying the example environment file:
     ```bash
     cd ~/BikeHub/api && cp .env.example .env
     ```

6. **Build API:**
   - Build the API using:
     ```bash
     cd ~/BikeHub/api && yarn build
     ```

7. **Build Admin Panel:**
   - Move to the admin directory and start the build process:
     ```bash
     cd ~/BikeHub/admin && yarn build
     ```

8. **Serve Admin Panel:**
   - Use a server to serve the admin panel on port 3002:
     ```bash
     serve -l 3002 -s ~/BikeHub/admin/build
     ```

Now, BikeHub is set up locally, and you can access the frontend at http://localhost:3000 and the admin panel at http://localhost:3002.


## Usage

Welcome to BikeHub! Here's a step-by-step guide on how you can make the most of our bike rental platform:

1. **Sign Up:**
   - Create your account by signing up on our platform. Simply provide the required details and set up your personal profile.

2. **Choose Your Bike:**
   - Browse through our diverse collection of bikes. Whether you're into electric rides or classic cruisers, pick the bike that suits your style and preferences.

3. **Select Location:**
   - Choose your desired location for bike pick-up. Our network of hubs is strategically placed for your convenience.

4. **Set Start and End Time:**
   - Specify the duration of your ride by setting the start and end times. Enjoy the flexibility to tailor your bike rental to fit your schedule.

5. **Process Payment:**
   - Complete the seamless payment process to secure your bike rental. We support secure online payments to make your transaction hassle-free.

6. **Generate QR Code:**
   - Once your payment is confirmed, generate a unique QR code that contains all the details of your rental. This code will be your key to unlocking your chosen bike.

7. **Unlock Your Bike:**
   - Head to the selected location with your QR code in hand. Our bikes are equipped with a device that reads the QR code, allowing you to effortlessly unlock and begin your journey.

8. **Enjoy Your Ride:**
   - Hit the road and enjoy the freedom of two-wheel exploration. Cruise through the city or embark on an adventure—BikeHub is your companion for a memorable ride.

9. **Return Your Bike:**
   - Once your ride is complete, return the bike to any BikeHub location. Ensure the bike is securely locked, and your rental will be concluded.

10. **Extend or Cancel Anytime:**
    - Need more time or had a change of plans? Extend your rental duration or cancel easily through the platform.

Experience the joy of cycling with BikeHub—your journey, your bike, your freedom!


## Contributing

We welcome contributions from the community to make BikeHub even better! Here's how you can get involved:

1. **Fork the Repository:**
   - Start by forking the BikeHub repository to your GitHub account.

2. **Clone Your Fork:**
   - Clone the forked repository to your local machine using:
     ```bash
     git clone https://github.com/nuuxcode/BikeHub.git
     ```

3. **Create a Branch:**
   - Create a new branch for your contribution:
     ```bash
     git checkout -b feature/your-feature
     ```

4. **Make Your Changes:**
   - Implement bug fixes, new features, or improvements. Ensure your code follows our coding standards.

5. **Commit Your Changes:**
   - Commit your changes with descriptive commit messages:
     ```bash
     git commit -m "Description of your changes"
     ```

6. **Push to Your Fork:**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature/your-feature
     ```

7. **Submit a Pull Request:**
   - Open a pull request on the BikeHub repository. Clearly describe your changes, including any relevant context or issues.

8. **Review and Merge:**
   - Our team will review your contribution. Once approved, we'll merge your changes into the main branch.

Thank you for contributing to BikeHub! Your efforts help create an even better biking experience for our users.

Feel free to reach out if you have any questions or need assistance during the contribution process.

## Related Projects

Explore more bike rental projects that might interest you:

- [DuaneDave/Bike-rental](https://github.com/DuaneDave/Bike-rental): A versatile bike rental system with a focus on user-friendly features.

- [youssefsharief/bikes-rental](https://github.com/youssefsharief/bikes-rental): A comprehensive solution for bike enthusiasts, offering a variety of rental options.

- [gurupratap-matharu/Bike-Rental-System](https://github.com/gurupratap-matharu/Bike-Rental-System): An innovative bike rental system designed for seamless user experiences.

- [sabbir-hossain-abir/Bike-Rental-System](https://github.com/sabbir-hossain-abir/Bike-Rental-System): A reliable and scalable bike rental platform with robust features.

- [rugarcialopez/bike-rentals](https://github.com/rugarcialopez/bike-rentals): A modern approach to bike rentals, focusing on performance and user satisfaction.

- [babroval/bike-rent](https://github.com/babroval/bike-rent): An open-source bike rental solution, perfect for customization and integration.

Feel free to explore these projects and discover different approaches to bike rental systems. If you have a project to add, please submit a pull request!

## Licensing

BikeHub is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT), making it free to use, modify, and distribute. This permissive open-source license allows you the flexibility to adapt our project to your needs while promoting collaboration within the community.

We encourage developers, enthusiasts, and contributors to explore, enhance, and share BikeHub, fostering a spirit of innovation and inclusivity.

For more details, please refer to the [MIT License](https://opensource.org/licenses/MIT).

## Screenshot

![BikeHub Screenshot](https://github.com/nuuxcode/BikeHub/assets/24565896/8b291285-c863-496e-9100-fba686d5d046)

## Deployment
site deployed at : [BikeHub](http://bikehub.me/)


## Author(s) LinkedIn
- [ITRI M'BARKI](https://www.linkedin.com/in/itri-m-barki-038704232/)
- [El Gharbi Ayoub](https://www.linkedin.com/in/elgharbiayoub/)
- [Mounssif nuuX BOUHLAOUI](https://www.linkedin.com/in/mounssif-bouhlaoui-25934570/)
