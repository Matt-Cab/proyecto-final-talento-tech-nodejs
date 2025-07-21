import express from 'express';
import cors from 'cors';
import { join, __dirname } from './utils/index.js';
import productRoutes from './routes/product.route.js';
import authRoutes from './routes/auth.route.js';
import { envs } from './config/envs.js';
// import { authentication } from './middlewares/auth.middleware.js';

//settings
const app = express();
app.set('PORT', envs.port);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.get('/', (req, res) => {
  res.json({ title: 'Simple REST API for products' });
});

app.use('/auth', authRoutes);
app.use('/api/products', productRoutes);
// app.use('/api/products', authentication, productRoutes);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Recurso no encontrado o ruta inválida.' });
});

//listeners
app.listen(app.get('PORT'), () => {
  console.log(`Server on port http://localhost:${app.get('PORT')}`);
});
