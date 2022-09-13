import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let carsRepository: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat',
      category_id: '1',
    });
  });

  it('should not be able to create a new car with same license plate', async () => {
    await createCarUseCase.execute({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat',
      category_id: '1',
    });

    await expect(
      createCarUseCase.execute({
        name: 'Fiat',
        description: 'Fiat description',
        daily_rate: 100,
        license_plate: 'ABC1234',
        fine_amount: 10,
        brand: 'Fiat',
        category_id: '1',
      })
    ).rejects.toEqual(new AppError('Car already exists'));
  });

  it('should be able to create a car with "available" true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat',
      category_id: '1',
    });

    expect(car.available).toBe(true);
  });
});
