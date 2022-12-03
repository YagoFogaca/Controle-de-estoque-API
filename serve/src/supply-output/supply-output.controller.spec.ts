import { Test, TestingModule } from '@nestjs/testing';
import { SupplyOutputController } from './supply-output.controller';
import { SupplyOutputService } from './supply-output.service';

describe('SupplyOutputController', () => {
  let controller: SupplyOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyOutputController],
      providers: [SupplyOutputService],
    }).compile();

    controller = module.get<SupplyOutputController>(SupplyOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
