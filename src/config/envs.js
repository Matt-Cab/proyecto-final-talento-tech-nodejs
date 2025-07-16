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
    
  },
  port: process.env.PORT || 3000,
};
