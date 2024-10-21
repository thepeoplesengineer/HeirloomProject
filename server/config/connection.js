import dotenv from 'dotenv';

dotenv.config(); 

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Render requires SSL in production
    }
  }
});

export default sequelize;