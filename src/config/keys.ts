import { config } from 'dotenv';

config();

export default {
  mongoURI: process.env.DB_URL,
};
