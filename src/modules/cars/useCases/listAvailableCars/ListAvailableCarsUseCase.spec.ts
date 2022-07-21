import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Available Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it('should return a list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat',
      category_id: '1',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat_test',
      category_id: '1',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Fiat_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat_test',
      category_id: '1',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Fiat',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Fiat',
      description: 'Fiat description',
      daily_rate: 100,
      license_plate: 'ABC1234',
      fine_amount: 10,
      brand: 'Fiat_test',
      category_id: '1',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: '1',
    });

    expect(cars).toEqual([car]);
  });
});
