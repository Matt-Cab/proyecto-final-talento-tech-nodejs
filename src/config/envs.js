import { config } from 'dotenv';
config();

export const envs = {
  database: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
  },
  secrets: {
    jwt_secret: process.env.JWT_SECRET || "qwedsazxcrfvtgbyhnujmiklop",
    session: process.env.SESSION_KEY || "poikldmnbghjuytbgt"
  },
  port: process.env.PORT || 5000,
};
