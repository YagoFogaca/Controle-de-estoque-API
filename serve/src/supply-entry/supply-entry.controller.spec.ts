import { Test, TestingModule } from '@nestjs/testing';
import { SupplyEntryController } from './supply-entry.controller';
import { SupplyEntryService } from './supply-entry.service';

describe('SupplyEntryController', () => {
  let controller: SupplyEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyEntryController],
      providers: [SupplyEntryService],
    }).compile();

    controller = module.get<SupplyEntryController>(SupplyEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
