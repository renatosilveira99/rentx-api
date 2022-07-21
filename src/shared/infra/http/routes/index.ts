import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRoutes } from './categories.routes';
import { rentalRoutes } from './rental.routes';
import { specificatiosRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificatiosRoutes);
router.use('/users', usersRoutes);
router.use('/cars', carsRoutes);
router.use('/rentals', rentalRoutes);
router.use(authenticateRoutes);

export { router };
