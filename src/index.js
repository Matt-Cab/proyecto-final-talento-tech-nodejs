import express from 'express';
import { join, __dirname } from './utils/index.js';
import productRoutes from './routes/product.route.js';
// import { db } from './config/db.js';
import { envs } from './config/envs.js';

//settings
const app = express();
app.set('PORT', envs.port);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
  res.json({ title: 'Simple REST API for products' });
});

app.use("/api/products", productRoutes);

//listeners
app.listen(app.get('PORT'), () => {
  console.log(`Server on port http://localhost:${app.get('PORT')}`);
});
