import { Pet } from './pet.entity';

describe('Pet', () => {
  it('should be defined', () => {
    expect(new Pet()).toBeDefined();
  });
});
