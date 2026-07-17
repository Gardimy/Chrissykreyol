import { Test, TestingModule } from '@nestjs/testing';
import { BiographyController } from './biography.controller';

describe('BiographyController', () => {
  let controller: BiographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiographyController],
    }).compile();

    controller = module.get<BiographyController>(BiographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
