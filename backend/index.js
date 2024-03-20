import express from 'express';
import { firebaseApp } from './config.mjs'; // Assuming your exported Firebase app instance is named 'app'

const PORT = process.env.PORT || 3000;
const app = express();

// Set up your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
