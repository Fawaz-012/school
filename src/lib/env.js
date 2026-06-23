import dotenv from 'dotenv';

dotenv.config();
export const   config = {
    port: process.env.PORT,
    db:{
        user: process.env.DB_USER,
        host:process.env.DB_HOST,
        name:process.env.DB_NAME,
        pass:process.env.DB_PASSWORD
    },
    access: process.env.ACCESS_SECRET,
      gmail: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
};