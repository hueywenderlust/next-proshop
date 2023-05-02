# Build Nextjs eCommerce Website

- Tech: Nextjs 13, Next Auth 4
- UI: Tailwind, chart.js, react-chartjs
- DB: MongoDB, Mongoose

## Run Locally

1. Clone repo

2. Create .env File


3. Setup MongoDB

   - Local MongoDB
   - Install it from [here](https://www.mongodb.com/try/download/community)
   - OR Atlas Cloud MongoDB
   - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
   - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

4. Install and Run

   ```
   $ npm install
   $ npm run dev
   ```

5. Seed Data

   - Run this on browser: http://localhost:5000/api/seed
   - It returns admin email and password and 6 sample products

6. Admin Login

   - Run http://localhost:3000/login
   - Enter admin email and password and click Login

